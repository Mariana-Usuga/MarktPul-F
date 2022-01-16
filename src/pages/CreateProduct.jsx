import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputCreateProduct from '../components/InputCreateProduct';
import { sendProduct } from '../store/actions/productActionsCreator';
import ProductPictures from '../components/ProductPictures';

import '../styles/pages/createProduct.scss';

const CreateProduct = () => {
  const [formProduct, setFormProduct] = useState({
    title: '',
    price: '',
    imageMain: '',
    description: '',
    category: '',
    marketId: ['61d9a8f16928b378ca731d74'],
    images: [],
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...formProduct };
    newState[name] = name === 'price' ? Number(value) : value;
    setFormProduct(newState);
  };

  const onChangeFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setFormProduct({ ...formProduct, imageMain: reader.result });
    };
  };

  const onChangeFiles = (e) => {
    console.log('images', e.target.files);
    // setFormProduct({ ...formProduct, images:})
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendProduct(formProduct));
  };

  return (
    <div className="createProductContainer">
      <div className="createProductContainer__item">
        <ProductPictures
          onChangeFile={onChangeFile}
          img={formProduct.imageMain}
        />
        <div className="createProductContainer__item__img">
          <img src="" alt="" />
        </div>
        <div className="createProductContainer__item__images">
          {/* <span className="createProductContainer__item__images__update">
            Subir más fotos del producto
          </span> */}
          <input
            className="createProductContainer__item__images__inputImg"
            onChange={onChangeFiles}
            type="file"
            name="product"
            id="product"
            accept="image/*"
            multiple
          />
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
              name="price"
              label="Precio"
            />
            <div className="inputProduct__category">
              <label className="inputProduct__label" htmlFor="category">
                Categoria
              </label>
              <select
                onChange={handleChange}
                name="category"
                className="inputProduct__input__category"
                id="category"
              >
                <option value="ropa" selected>
                  ropa
                </option>
                <option value="electrodomistico">electrodomistico</option>
                <option value="hogar">hogar</option>
                <option value="accesorio">accesorio</option>
              </select>
            </div>
            <InputCreateProduct
              handleChange={handleChange}
              name="description"
              label="Descripcion"
            />
          </div>
          <button onClick={onSubmit} className="form__btn" type="submit">
            Crear producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
