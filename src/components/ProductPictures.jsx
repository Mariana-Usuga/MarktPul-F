import PropTypes from 'prop-types';

const ProductPictures = ({ onChangeFile, img }) => (
  <>
    <div className="createProductContainer__item__img">
      <img src={img} alt="" />
    </div>
    <div className="createProductContainer__item__images">
      <span className="createProductContainer__item__images__update">
        Subir foto principal del producto
      </span>
      <input
        className="createProductContainer__item__images__inputImg"
        onChange={onChangeFile}
        type="file"
        name="product"
        id="product"
        accept="image/*"
      />
    </div>
  </>
);

ProductPictures.propTypes = {
  onChangeFile: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductPictures;
