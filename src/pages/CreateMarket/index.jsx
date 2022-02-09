/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { sendMarket } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import { fetchUser } from '../../store/actions/userActionsCreator';
// import FormMarket from '../../components/FormMarket/index';

import './CreateMarket.scss';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;
const CreateMarket = () => {
  const navigate = useNavigate();
  const token = getCurrentLocalStorage('token');
  const user = useSelector((state) => state.user.user);
  const [mainImage, setMainImage] = useState(null);
  const [formError, setFormError] = useState('');
  const dispatch = useDispatch();

  const [formMarket, setFormMarket] = useState({
    title: '',
    virtual: true,
    address: '',
    country: '',
    city: '',
    moreDetails: '',
    image: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    if (!formMarket.title.length || !mainImage) {
      setFormError('Missing image or title');
    } else {
      setFormError('');
    }
  }, [formMarket, mainImage]);

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, []);

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
  const MySwal = withReactContent(Swal);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataImageMain = new FormData();
      formDataImageMain.append('image', formMarket.image);
      formDataImageMain.append('folder', 'market/image');

      const resImage = await axios.post(
        `${URL_BASE}/api/upload/file`,
        formDataImageMain,
      );
      if (!resImage.statusText === 'Created' || !resImage.status === 201) {
        setFormError('Error uploading image');
        await MySwal.fire({
          title: <strong>Algo ha sucedido</strong>,
          html: <i>Hay un error con la imagen.</i>,
          icon: 'error',
        });
        return;
      }

      const newFormMarket = {
        virtual: formMarket.virtual,
        address: formMarket.address,
        country: formMarket.country,
        city: formMarket.city,
        moreDetails: formMarket.moreDetails,
        title: formMarket.title,
        image: resImage.data.url,
        description: formMarket.description,
        category: formMarket.category,
        organizer: user.username,
      };
      dispatch(sendMarket(newFormMarket, user.marketId, user._id));
      await MySwal.fire({
        title: <strong>Buen trabajo!</strong>,
        html: <i>Mercado Creado!</i>,
        icon: 'success',
      });
      navigate('/pages/marketReport/');
    } catch (error) {
      setFormError(error);
      await MySwal.fire({
        title: <strong>Algo ha sucedido</strong>,
        html: <i>{`Alguno de los campos es innválido. ${error}`}</i>,
        icon: 'error',
      });
    }
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
          Datos de mi nuevo mercado
        </h2>
        {/* <FormMarket handleChange={handleChange} onSubmit={onSubmit} /> */}
        <form className="formMarket">
          <div className="formMarket__input">
            <div className="inputProduct">
              <label className="inputProduct__label" htmlFor="Titulo">
                Titulo
              </label>
              <input
                onChange={handleChange}
                name="title"
                className="inputProduct__input"
                type="text"
                id="title"
                value={formMarket.title}
              />
            </div>
            <div className="virtual">
              <label className="virtual__label" htmlFor="virtual">
                <input
                  className="virtual__radio"
                  id="virtual"
                  type="radio"
                  name="choosePaymentMethod"
                  checked={formMarket.virtual}
                  onChange={() =>
                    setFormMarket({ ...formMarket, virtual: true })
                  }
                />
                {'  Virtual'}
              </label>
            </div>
            <div className="location">
              <label className="location__label" htmlFor="fisico">
                <input
                  className="location__radio"
                  id="fisico"
                  type="radio"
                  name="fisico"
                  checked={!formMarket.virtual}
                  onChange={() =>
                    setFormMarket({ ...formMarket, virtual: false })
                  }
                />
                {'  Físico'}
              </label>
              <div
                className={!formMarket.virtual ? 'formAddressMarket' : 'hide'}
              >
                <div className="formAddressMarket__div">
                  <label className="formAddressMarket__label" htmlFor="adress">
                    Dirección
                  </label>
                  <input
                    onChange={handleChange}
                    className="formAddressMarket__input"
                    id="address"
                    type="text"
                    name="address"
                    value={formMarket?.address}
                  />
                </div>
                <div className="formAddressMarket__div">
                  <label className="formAddressMarket__label" htmlFor="country">
                    Pais
                  </label>
                  <input
                    onChange={handleChange}
                    className="formAddressMarket__input"
                    id="country"
                    type="text"
                    name="country"
                    value={formMarket?.country}
                  />
                </div>
                <div className="formAddressMarket__div">
                  <label className="formAddressMarket__label" htmlFor="city">
                    Ciudad
                  </label>
                  <input
                    onChange={handleChange}
                    className="formAddressMarket__input"
                    id="city"
                    type="text"
                    name="city"
                    value={formMarket?.city}
                  />
                </div>
                <div className="formAddressMarket__div">
                  <label
                    className="formAddressMarket__label"
                    htmlFor="moreDetails"
                  >
                    Mas Detalles
                  </label>
                  <input
                    onChange={handleChange}
                    className="formAddressMarket__input__moreDetail"
                    id="moreDetails"
                    type="text"
                    name="moreDetails"
                    value={formMarket?.moreDetails}
                  />
                </div>
              </div>
            </div>
            <div className="inputMarket__category">
              <label className="inputMarket__label" htmlFor="category">
                Categoria
              </label>
              <select
                onChange={handleChange}
                name="category"
                className="inputMarket__input__category"
                id="category"
                value={formMarket.category}
              >
                <option value="ropa">Ropa</option>
                <option value="electrodomestico">Electrodoméstico</option>
                <option value="hogar">Hogar</option>
                <option value="accesorio">Accesorio</option>
              </select>
            </div>
            <div className="inputProduct">
              <label className="inputProduct__label__des" htmlFor="Descripcion">
                Descripción
              </label>

              <textarea
                onChange={handleChange}
                name="description"
                className="inputProduct__input__description"
                type="text"
                id="Descripcion"
                value={formMarket?.description}
              />
            </div>
          </div>
        </form>

        <button
          onClick={onSubmit}
          disabled={formError.length}
          className="formMarket__btn"
          type="submit"
        >
          Crear mercado
        </button>
      </div>
    </div>
  );
};

export default CreateMarket;
