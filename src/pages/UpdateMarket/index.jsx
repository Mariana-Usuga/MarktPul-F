/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import {
  fetchUpdateMarket,
  showLoader,
  hideLoader,
} from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import FormMarket from '../../components/FormMarket/index';
import { patchMarket } from '../../store/services/productAndMarketServices';

import '../CreateProduct/CreateProduct.scss';

const UpdateMarket = () => {
  const [mainImage, setMainImage] = useState(null);
  const [showLoaderState, setShowLoaderState] = useState(false);
  const isLoading = useSelector((state) => state.productAndMarket.isLoading);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [formMarket, setFormMarket] = useState({
    title: '',
    virtual: '',
    address: '',
    country: '',
    city: '',
    moreDetails: '',
    image: '',
    description: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...formMarket };
    newState[name] = value;
    setFormMarket(newState);
  };
  const onChangeFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = async () => {
      setMainImage(reader.result);
    };
    setFormMarket((formMarket) => ({
      ...formMarket,
      image: e.target.files[0],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let imageMain;
    if (formMarket.image) {
      const formDataImageMain = new FormData();
      formDataImageMain.append('imageMain', formMarket.image);
      const responseImageMain = await axios.post(
        'http://localhost:8080/api/upload/file',
        formDataImageMain,
      );
      imageMain = responseImageMain;
    }

    const newFormMarket = {
      virtual: formMarket.virtual,
      address: formMarket.address,
      country: formMarket.country,
      city: formMarket.city,
      moreDetails: formMarket.moreDetails,
      title: formMarket.title,
      image: imageMain?.data.url,
      description: formMarket.description,
      category: formMarket.category,
    };

    if (!isLoading) {
      dispatch(showLoader());
      dispatch(fetchUpdateMarket(newFormMarket, id));
      if (patchMarket) {
        setShowLoaderState(true);
        dispatch(hideLoader());
      }
    }
  };
  return (
    <div className="createProductContainer">
      <div className="createProductContainer__item">
        <ProductPictures
          onChangeFile={onChangeFile}
          img={mainImage}
          title="Subir foto del mercado"
        />
      </div>
      <div className="createProductContainer__item__data">
        <h2 className="createProductContainer__item__data__title">
          Editar mi mercado
        </h2>
        <div>Llena los campos que deseas editar</div>
        <FormMarket handleChange={handleChange} onSubmit={onSubmit} />
        <button onClick={onSubmit} className="formMarket__btn" type="submit">
          {!isLoading && !showLoaderState ? (
            ' Actualizar mercado'
          ) : !showLoaderState ? (
            <img
              className="loading"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt="loading content"
            />
          ) : (
            <div>
              <FaCheckCircle />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default UpdateMarket;
