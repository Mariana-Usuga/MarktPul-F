import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import InputCreateProduct from '../../components/InputCreateProduct/index';
import { sendMarket } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import IsVirtual from '../../components/IsVirtual/index';

const CreateMarket = () => {
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
    newState[name] = name === 'price' ? Number(value) : value;
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
      'http://localhost:3002/api/upload/file',
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
    dispatch(sendMarket(newFormMarket));
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
        </form>
      </div>
    </div>
  );
};

export default CreateMarket;
