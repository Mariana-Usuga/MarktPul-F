import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchUpdateMarket } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import FormMarket from '../../components/FormMarket/index';

import '../CreateProduct/CreateProduct.scss';

const UpdateMarket = () => {
  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();

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
    const formDataImageMain = new FormData();
    formDataImageMain.append('imageMain', formMarket.image);
    const responseImageMain = await axios.post(
      'http://localhost:8080/api/upload/file',
      formDataImageMain,
    );

    const newFormMarket = {
      virtual: formMarket.virtual,
      address: formMarket.address,
      country: formMarket.country,
      city: formMarket.city,
      moreDetails: formMarket.moreDetails,
      title: formMarket.title,
      image: responseImageMain.data.url,
      description: formMarket.description,
      category: formMarket.category,
    };
    dispatch(fetchUpdateMarket(newFormMarket));
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
          Actualizar mercado
        </button>
      </div>
    </div>
  );
};

export default UpdateMarket;
