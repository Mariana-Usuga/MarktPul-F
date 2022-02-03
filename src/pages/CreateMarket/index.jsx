import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { sendMarket } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
// import IsVirtual from '../../components/IsVirtual/index';
import FormMarket from '../../components/FormMarket/index';

import './CreateMarket.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;
const CreateMarket = () => {
  const user = useSelector((state) => state.user.user);
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
      `${URL_BASE}/api/upload/file`,
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
      organizer: user.username,
    };
    dispatch(sendMarket(newFormMarket, user.marketId, user._id));
  };
  return (
    <div className="createMarketContainer">
      <div className="createMarketContainer__item">
        <ProductPictures
          onChangeFile={onChangeFile}
          img={mainImage}
          title="Subir foto del mercado"
        />
      </div>
      <div className="createMarketContainer__item__data">
        <h2 className="createMarketContainer__item__data__title">
          Datos de mi mercado
        </h2>
        <FormMarket handleChange={handleChange} onSubmit={onSubmit} />
        <button onClick={onSubmit} className="formMarket__btn" type="submit">
          Crear mercado
        </button>
      </div>
    </div>
  );
};

export default CreateMarket;
