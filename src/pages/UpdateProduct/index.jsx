import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InputCreateProduct from '../../components/InputCreateProduct/index';
import { fetchUpdateProduct } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import ChooseMarket from '../../components/ChoosseMarket';
import ChooseProductCategory from '../../components/ChooseProductCategory';
import { getProduct } from '../../store/services/productAndMarketServices';

// import './CreateProduct.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';

const CreateProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    const prod = await getProduct(id);
    setProduct(prod);
  }, []);

  const [formProduct, setFormProduct] = useState({
    title: product.title,
    price: product.price,
    mainImage: product.mainImage,
    description: product.description,
    category: product.category,
    images: product.images,
    marketId: product.marketId,
  });

  // const [formProduct, setFormProduct] = useState({})

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
    // let imageMain;
    let imagesArray;
    if (formProduct.mainImage) {
      const formDataImageMain = new FormData();
      formDataImageMain.append('imageMain', formProduct.mainImage);
      // const responseImageMain = await axios.post(
      // `${URL_BASE}/api/upload/file`,
      // formDataImageMain,
      // );
      // imageMain = responseImageMain;
    }
    if (formProduct.images) {
      const formDataImages = new FormData();
      for (const file of formProduct.images) {
        formDataImages.append('images', file);
      }
      const responseImage = await axios.post(
        `${URL_BASE}/api/upload/files`,
        formDataImages,
      );
      imagesArray = [];
      for (const image of responseImage.data) {
        imagesArray.push(image.url);
      }
    }
    const newFormProduct = {
      title: formProduct.title,
      price: formProduct.price.replace(/\./g, ''),
      // imageMain: imageMain.data.url,
      description: formProduct.description,
      category: formProduct.category,
      images: imagesArray,
      marketId: formProduct.marketId,
    };
    console.log('form', newFormProduct);
    dispatch(fetchUpdateProduct(newFormProduct, id));
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
          Editar mi producto
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
            Editar mi producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
