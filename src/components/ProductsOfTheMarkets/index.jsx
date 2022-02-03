/* eslint-disable react/style-prop-object */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductsOfTheMarkets = ({ products }) => (
  <div>
    <div>
      {products ? (
        products.length === 0 ? (
          <div className="marketProducts__noProducts">
            Este mercado no tiene productos
          </div>
        ) : (
          products.map((product) => (
            <Link
              to={`/pages/itemDetail/${product._id}`}
              key={product._id}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="marketProducts">
                <div className="marketProducts__item__img">
                  <img src={product.imageMain} alt="" />
                </div>
                <div className="marketProducts__item__info">
                  <div className="marketProducts__item__title">
                    {product.title}
                  </div>
                  {`${product.description.slice(0, 100)}...`}
                </div>
                <div className="marketProducts__item__price">
                  {`$${product.price.toLocaleString('es-MX')}`}
                </div>
              </div>
            </Link>
          ))
        )
      ) : null}
    </div>
  </div>
);

ProductsOfTheMarkets.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

export default ProductsOfTheMarkets;
