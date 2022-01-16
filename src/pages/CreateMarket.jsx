// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { AdvancedImage } from '@cloudinary/react';
// import { Cloudinary } from '@cloudinary/url-gen';
import InputCreateProduct from '../components/InputCreateProduct';
import { sendProduct } from '../store/actions/productActionsCreator';

import '../styles/pages/createProduct.scss';

const CreateMarket = () => {
  const [formMarket, setFormMarket] = useState({
    title: '',
    place: '',
    organizer: '',
    image: '',
    description: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...formMarket };
    newState[name] = value;
    setFormMarket(newState);
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log('form', formMarket);
  };

  const onChangeFile = (e) => {
    setFormMarket({ ...formMarket, imageMain: [e.target.files[0]] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendProduct());
  };
  return (
    <div className="createProductContainer">
      <div className="createProductContainer__item">
        <div className="createProductContainer__item__img">
          <input
            onChange={onChangeFile}
            type="file"
            name="product"
            id="product"
            accept="image/*"
          />
          <button
            onClick={onSubmit}
            className="createProductContainer__item__btn"
            type="submit"
          >
            Actualizar foto del producto
          </button>
          <div>
            {/* <AdvancedImage cldImg={myImage} /> */}
            <img src={formMarket.image} alt="" />
          </div>
        </div>
      </div>
      <div className="createProductContainer__item__data">
        <h2 className="createProductContainer__item__data__title">
          Datos de mi producto
        </h2>
        <form className="form">
          <div className="form__input">
            <InputCreateProduct
              handleChange={handleChange}
              name="title"
              label="Titulo"
            />
            <InputCreateProduct
              handleChange={handleChange}
              name="place"
              label="Lugar"
            />
            <InputCreateProduct
              handleChange={handleChange}
              name="organizer"
              label="Organizador"
            />
            <InputCreateProduct
              handleChange={handleChange}
              name="description"
              label="Descripcion"
            />
          </div>
          <button onClick={sendForm} className="form__btn" type="submit">
            Crear producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMarket;
