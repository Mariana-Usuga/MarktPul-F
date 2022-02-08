/* eslint-disable */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { showLoader, hideLoader } from '../../store/actions/payActionsCreator';
import { fetchUpdateMarket } from '../../store/actions/productAndMarketActions';
import ProductPictures from '../../components/ProductPictures/index';
import { patchMarket } from '../../store/services/productAndMarketServices';

import '../CreateProduct/CreateProduct.scss';

const filterMarketById = (marketList, id) => {
  const marketDefault = {
    title: '',
    virtual: '',
    address: '',
    country: '',
    city: '',
    moreDetails: '',
    image: '',
    description: '',
    category: '',
  };
  if (marketList) {
    const filtered = marketList.filter((market) => {
      const { _id } = market;
      return id === _id;
    });
    return { ...filterMarketById, ...filtered[0] };
  }
  return marketDefault;
};

const UpdateMarket = () => {
  const [mainImage, setMainImage] = useState(null);
  const [showLoaderState, setShowLoaderState] = useState(false);
  const isLoading = useSelector((state) => state.productAndMarket.isLoading);
  const markets = useSelector((state) => state.productAndMarket.markets.items);
  const { id } = useParams();
  const currentMarket = filterMarketById(markets, id);
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
    setFormMarket({
      ...formMarket,
      title: currentMarket?.title ?? '',
      virtual: currentMarket?.virtual ?? true,
      address: currentMarket?.address ?? '',
      country: currentMarket?.country ?? '',
      city: currentMarket?.city ?? '',
      moreDetails: currentMarket?.moreDetails,
      image: currentMarket?.image ?? '',
      description: currentMarket?.description ?? '',
      category: currentMarket?.category ?? '',
    });
  }, [markets]);

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
    setFormMarket({
      ...formMarket,
      image: e.target.files[0],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let imageMain;
    console.log(formMarket.image);
    if (formMarket.image && formMarket.image !== currentMarket.image) {
      const formDataImageMain = new FormData();
      formDataImageMain.append('image', formMarket.image);
      const responseImageMain = await axios.post(
        `${process.env.REACT_APP_API_URL_BASE}/api/upload/file`,
        formDataImageMain,
      );
      imageMain = responseImageMain;
    }

    const newFormMarket = {
      virtual: formMarket.virtual,
      address: formMarket.address,
      country: formMarket.country,
      city: formMarket.city,
      moreDetails: formMarket.moreDetails,
      title: formMarket.title,
      image: imageMain?.data.url,
      description: formMarket.description,
      category: formMarket.category,
    };

    if (!isLoading) {
      dispatch(showLoader());
      dispatch(fetchUpdateMarket(newFormMarket, id));
      if (patchMarket) {
        setShowLoaderState(true);
        dispatch(hideLoader());
      }
    }
  };

  return (
    <div className="createProductContainer">
      <div className="createProductContainer__item">
        <ProductPictures
          onChangeFile={onChangeFile}
          img={mainImage || formMarket?.image}
          title="Subir foto del mercado"
        />
      </div>
      <div className="createProductContainer__item__data">
        <h2 className="createProductContainer__item__data__title">
          Editar mi mercado
        </h2>
        <div>Llena los campos que deseas editar</div>
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

        <button onClick={onSubmit} className="formMarket__btn" type="submit">
          {!isLoading && !showLoaderState ? (
            ' Actualizar mercado'
          ) : !showLoaderState ? (
            <img
              className="loading"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
              alt="loading content"
            />
          ) : (
            <div>
              <FaCheckCircle />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default UpdateMarket;
