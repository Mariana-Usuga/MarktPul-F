import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import ProductPhoto from '../components/ProductPhoto';
import InterestPhoto from '../components/InterestPhoto';
import '../styles/pages/itemDetail.scss';

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const breakPoints = [
    // { width: 400, itemsToShow: 1 },
    // { width: 500, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
    // { width: 50, itemsToShow: 1 },
    { width: 100, itemsToShow: 2 },
  ];

  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);
  return (
    <>
      <div className="container">
        <div className="container__main">
          <img
            className="container__main__img"
            src={product.image}
            alt="product"
          />
          <Carousel className="carousel" breakPoints={breakPoints}>
            <ProductPhoto image={product.image} />
            <ProductPhoto image={product.image} />
            <ProductPhoto image={product.image} />
            <ProductPhoto image={product.image} />
          </Carousel>
        </div>
        <div className="container__info">
          <h2 className="container__info__title">{product.title}</h2>
          <p className="container__info__description">{product.description}</p>
          <p className="container__info__price">{`$ ${product.price}`}</p>
          <button className="btn__buy" type="button">
            Comprar
          </button>
          <button className="btn__addCart" type="button">
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
          <InterestPhoto image={product.image} />
          <InterestPhoto image={product.image} />
          <InterestPhoto image={product.image} />
          <InterestPhoto image={product.image} />
          <InterestPhoto image={product.image} />
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
