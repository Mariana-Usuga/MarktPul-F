import PropTypes from 'prop-types';

const ProductPictures = ({ onChangeFile, img, title }) => (
  <>
    <div className="createProductContainer__item__img">
      <img src={img} alt="" />
    </div>
    <div className="createProductContainer__item__images">
      <input
        className="createProductContainer__item__images__inputImg"
        onChange={onChangeFile}
        type="file"
        name="product"
        id="product"
        accept="image/*"
      />
      <label
        className="createProductContainer__item__images__update"
        htmlFor="product"
      >
        {title}
      </label>
    </div>
  </>
);

ProductPictures.propTypes = {
  onChangeFile: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ProductPictures;
