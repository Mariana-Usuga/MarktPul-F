import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import InputCreateProduct from '../components/InputCreateProduct';
import { sendProduct } from '../store/actions/productActionsCreator';
import ProductPictures from '../components/ProductPictures';
import IsVirtual from '../components/IsVirtual';

import '../styles/pages/createProduct.scss';

const CreateProduct = () => {
  const [mainImage, setMainImage] = useState(null);
  const dispatch = useDispatch();

  const [formProduct, setFormProduct] = useState({
    title: '',
    virtual: '',
    place: '',
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataImageMain = new FormData();
    formDataImageMain.append('imageMain', formProduct.mainImage);
    const responseImageMain = await axios.post(
      'http://localhost:3002/api/upload/file',
      formDataImageMain,
    );
    const newFormProduct = {
      title: formProduct.title,
      price: formProduct.price,
      imageMain: responseImageMain.data.url,
      description: formProduct.description,
      category: formProduct.category,
      marketId: formProduct.marketId,
    };
    dispatch(sendProduct(newFormProduct));
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
          Datos de mi mercado
        </h2>
        <form className="form">
          <div className="form__input">
            <InputCreateProduct
              handleChange={handleChange}
              name="title"
              label="Titulo"
            />
            <IsVirtual handleChange={handleChange} />
            {/* <IsVirtual place="Virtual" /> */}
            <div className="nose">
              <div className="inputMarket__category">
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
              Crear mercado
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
