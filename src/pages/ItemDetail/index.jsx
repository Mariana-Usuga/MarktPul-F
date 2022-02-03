/* eslint-disable */
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import ProductPhoto from '../../components/ProductPhoto';
import './ItemDetail.scss';
import {
  addProductToCart,
  addQtyProductToCart,
} from '../../store/actions/cartActions';
import { getProduct } from '../../store/services/productAndMarketServices';

const ItemDetail = () => {
  const [product, setProduct] = useState();
  const token = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const breakPoints = [{ width: 100, itemsToShow: 1 }];
  const { id } = useParams();
  const products = useSelector((state) => state.productAndMarket.products);

  useEffect(async () => {
    const prod = await getProduct(id);
    setProduct(prod);
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, [cart]);

  /* eslint-disable */
  const handleCarrito = (e) => {
    e.preventDefault();
    const cartPrev = JSON.parse(localStorage.getItem('cartProduct')) || [];
    const exists = cartPrev.find((element) => element._id === product._id);
    if (exists) {
      dispatch(addQtyProductToCart(exists));
    } else {
      dispatch(addProductToCart(product));
    }
  };
  return (
    <>
      <div className="container">
        <div className="container__main">
          <img
            className="container__main__img"
            src={product?.imageMain}
            alt="product"
          />
          <Carousel className="carousel" breakPoints={breakPoints}>
            {product?.images === 0 ? (
              <div>no hay mas fotos</div>
            ) : (
              product?.images?.map((img) => <ProductPhoto image={img} />)
            )}
          </Carousel>
        </div>
        <div className="container__info">
          <h2 className="container__info__title">{product?.title}</h2>
          <p className="container__info__description">{product?.description}</p>
          <p className="container__info__price">
            {product?.price.toLocaleString('es-MX')}
          </p>
          <button className="btn__buy" type="button">
            <Link
              to={token ? `/pages/paymentProcess/${id}` : '/login'}
              className="btn__buy__link"
            >
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
          {products
            .filter((p) => p.category == product?.category)
            .filter((pro) => product?.title !== pro.title)
            .slice(0, 5)
            .map((product) => (
              <div className="interest">
                <img
                  clasName="interest__img"
                  src={product?.imageMain}
                  alt="product"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
