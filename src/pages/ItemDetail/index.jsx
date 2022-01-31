/* eslint-disable */
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import ProductPhoto from '../../components/ProductPhoto';
import InterestPhoto from '../../components/InterestPhoto';
import { fetchAPay } from '../../store/actions/payActionsCreator';
import { fetchAproduct } from '../../store/actions/landingPageActionsCreator';
import './ItemDetail.scss';
import {
  addProductToCart,
  addQtyProductToCart,
} from '../../store/actions/cartActions';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const product = useSelector((state) => state.landing.product);
  const breakPoints = [{ width: 100, itemsToShow: 2 }];
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAproduct(id));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, [cart]);
  const buyAproduct = (e) => {
    e.preventDefault();
    dispatch(fetchAPay());
  };
  /* eslint-disable */
  const handleCarrito = () => {
    const cartPrev = JSON.parse(localStorage.getItem('cartProduct')) || [];
    const exists = cartPrev.find((element) => element._id === product._id);
    if (exists) {
      dispatch(addQtyProductToCart(exists));
    } else {
      dispatch(addProductToCart(product));
    }
  };
  /* eslint-enable */
  return (
    <>
      <div className="container">
        <div className="container__main">
          <img
            className="container__main__img"
            src={product.imageMain}
            alt="product"
          />
          <Carousel className="carousel" breakPoints={breakPoints}>
            <ProductPhoto image={product.imageMain} />
            <ProductPhoto image={product.imageMain} />
            <ProductPhoto image={product.imageMain} />
            <ProductPhoto image={product.imageMain} />
          </Carousel>
        </div>
        <div className="container__info">
          <h2 className="container__info__title">{product.title}</h2>
          <p className="container__info__description">{product.description}</p>
          <p className="container__info__price">{product.price}</p>
          <button onClick={buyAproduct} className="btn__buy" type="button">
            <Link to="/pages/paymentProcess" className="btn__buy__link">
              Comprar
            </Link>
          </button>
          <button
            className="btn__addCart"
            type="button"
            onClick={handleCarrito}
          >
            Añadir al carrito
          </button>
          <button className="btn__seller" type="button">
            Contactar al vendedor
          </button>
        </div>
      </div>
      <div>
        <h2 className="titleInterest">Tambien te podria interesar</h2>
        <div className="interestPhotos">
          <InterestPhoto image={product.imageMain} />
          <InterestPhoto image={product.imageMain} />
          <InterestPhoto image={product.imageMain} />
          <InterestPhoto image={product.imageMain} />
          <InterestPhoto image={product.imageMain} />
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
