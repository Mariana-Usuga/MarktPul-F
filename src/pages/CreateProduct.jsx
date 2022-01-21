import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import InputCreateProduct from '../components/InputCreateProduct';
import { sendProduct } from '../store/actions/productAndMarketActions';
import ProductPictures from '../components/ProductPictures';

import '../styles/pages/createProduct.scss';

const CreateProduct = () => {
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const [formProduct, setFormProduct] = useState({
    title: '',
    price: '',
    mainImage: '',
    description: '',
    category: '',
    marketId: ['61d9a8f16928b378ca731d74', '61d9a8f16928b378ca731d74'],
    images: [],
  });
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
    reader.onloadend = async () => {
      setMainImage(reader.result);
    };
    setFormProduct((formProduct) => ({
      ...formProduct,
      mainImage: e.target.files[0],
    }));
  };

  const onChangeFiles = (e) => {
    const files = Object.values(e.currentTarget.files);
    if (files) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
          setImages((images) => [...images, reader.result]);
        };
      });
    }
    setFormProduct((formProduct) => ({
      ...formProduct,
      images: e.target.files,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataImageMain = new FormData();
    const formDataImages = new FormData();
    formDataImageMain.append('imageMain', formProduct.mainImage);
    for (const file of formProduct.images) {
      formDataImages.append('images', file);
    }
    const responseImageMain = await axios.post(
      'http://localhost:3002/api/upload/file',
      formDataImageMain,
    );
    const responsee = await axios.post(
      'http://localhost:3002/api/upload/files',
      formDataImages,
    );
    const responseImages = [];
    for (const image of responsee.data) {
      responseImages.push(image.url);
    }
    const newFormProduct = {
      title: formProduct.title,
      price: formProduct.price,
      imageMain: responseImageMain.data.url,
      description: formProduct.description,
      category: formProduct.category,
      marketId: formProduct.marketId,
      images: responseImages,
    };
    dispatch(sendProduct(newFormProduct));
  };
  return (
    <div className="createProductContainer">
      <div className="createProductContainer__item">
        <ProductPictures
          onChangeFile={onChangeFile}
          img={mainImage}
          title="Subir foto principal del producto"
        />
        <div className="createProductContainer__item__images">
          <div className="createProductContainer__item__images__container">
            {images.slice(0, 3).map((image) => (
              <img src={image} alt="images" />
            ))}
          </div>
          <input
            className="createProductContainer__item__images__inputImg"
            onChange={onChangeFiles}
            type="file"
            name="product"
            id="products"
            accept="image/*"
            multiple
          />
          <label
            className="createProductContainer__item__images__update"
            htmlFor="products"
          >
            Subir más fotos del producto
          </label>
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
