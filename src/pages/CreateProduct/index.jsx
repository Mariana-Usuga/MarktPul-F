import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputCreateProduct from '../../components/InputCreateProduct/index';
import { sendProduct } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import ChooseMarket from '../../components/ChoosseMarket';
import ChooseProductCategory from '../../components/ChooseProductCategory';

import './CreateProduct.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const [formProduct, setFormProduct] = useState({
    title: '',
    price: '',
    mainImage: '',
    description: '',
    category: '',
    images: [],
    marketId: [],
  });
  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...formProduct };
    newState[name] = value;
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
    formDataImageMain.append('image', formProduct.mainImage);
    formDataImageMain.append('folder', 'product/image');
    for (const file of formProduct.images) {
      formDataImages.append('images', file);
    }
    const responseImageMain = await axios.post(
      `${URL_BASE}/api/upload/file`,
      formDataImageMain,
    );
    /* const responseImage = await axios.post(
      `${URL_BASE}/api/upload/files`,
      formDataImages,
    );
    const responseImages = [];
    for (const image of responseImage.data) {
      responseImages.push(image.url);
    } */
    const newFormProduct = {
      title: formProduct.title,
      price: formProduct.price.replace(/\./g, ''),
      imageMain: responseImageMain.data.url,
      description: formProduct.description,
      category: formProduct.category,
      /*  images: responseImages, */
      marketId: formProduct.marketId,
    };
    dispatch(sendProduct(newFormProduct));
    navigate('/');
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
        <form className="formProduct">
          <div className="formProduct__input">
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
            <ChooseProductCategory handleChange={handleChange} />
            <InputCreateProduct
              handleChange={handleChange}
              name="description"
              label="Descripcion"
            />
            <ChooseMarket
              formProduct={formProduct}
              setFormProduct={setFormProduct}
            />
          </div>
          <button onClick={onSubmit} className="formProduct__btn" type="submit">
            Crear producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
