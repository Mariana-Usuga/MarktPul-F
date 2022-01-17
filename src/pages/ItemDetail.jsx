import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import ProductPhoto from '../components/ProductPhoto';
import InterestPhoto from '../components/InterestPhoto';
import '../styles/pages/itemDetail.scss';
import {
  addProductToCart,
  updateProductToCart,
} from '../store/actions/cartActions';
// import { useCartState } from '../context/CartContext';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const [product, setProduct] = useState({});
  const breakPoints = [{ width: 100, itemsToShow: 2 }];
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://marktpul-bk.herokuapp.com/api/product/${id}`,
      );
      setProduct(res.data);
    };
    getProduct();
  }, []);
  useEffect(() => {
    window.localStorage.setItem('cartProduct', [JSON.stringify(cart)]);
  }, [cart]);
  /* eslint-disable */
  const handleCarrito =  () => {
    const cartPrev = JSON.parse(localStorage.getItem('cartProduct')) || [];
    const exists = cartPrev.find((element) => element._id === product._id);
    if (exists) {
      dispatch(updateProductToCart(exists));
    }
    else {
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
          <p className="container__info__price">{`$ ${product.price}`}</p>
          <button className="btn__buy" type="button">
            Comprar
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
