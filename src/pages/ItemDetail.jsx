import { FaShoppingCart } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import { Link, Outlet, useParams } from 'react-router-dom';
import product2 from '../styles/image/product2.png';
// import { Link, Outlet } from 'react-router-dom';
import { getProduct } from './products';

import '../styles/pages/itemDetail.scss';

const ItemDetail = () => {
  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const { id } = useParams();
  const product = getProduct(id);
  return (
    <>
      <div className="container">
        <div className="container__item__imgs">
          {' '}
          <img className="container__item__img" src={product2} alt="product" />
          <Carousel breakPoints={breakPoints}>
            <div>
              {' '}
              <img src={product} alt="product" />
            </div>
            <div>
              {' '}
              <img src={product} alt="product" />
            </div>
            <div>
              {' '}
              <img src={product} alt="product" />
            </div>
            <div>
              {' '}
              <img src={product} alt="product" />
            </div>
          </Carousel>
        </div>
        <div className="container__item">
          <h2 className="container__item__title">{product.title}</h2>
          <div className="container__item__cart">
            <FaShoppingCart />
          </div>
          <div />
          <p className="container__item__desc">{product.descrip}</p>
          <p className="container__item__price">{product.price}</p>
          <button className="container__item__btnBuy" type="button">
            Comprar
          </button>
          <button className="container__item__btn" type="button">
            Contactar al vendedor
          </button>
        </div>
      </div>
      <h2>Tambien podria interesarte</h2>
      <div>
        <Link to="/nav">Ir al nav</Link>
      </div>
      <Outlet />
    </>
  );
};
export default ItemDetail;
