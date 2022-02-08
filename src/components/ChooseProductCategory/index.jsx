import PropTypes from 'prop-types';

const ChooseProductCategory = ({ handleChange }) => (
  <div className="inputProduct__category">
    <label className="inputProduct__label" htmlFor="category">
      Categoria
    </label>
    <select
      onChange={handleChange}
      name="category"
      className="inputProduct__input__category"
      id="category"
    >
      <option value="ropa" selected>
        ropa
      </option>
      <option value="electrodomistico">electrodomistico</option>
      <option value="hogar">hogar</option>
      <option value="accesorio">accesorio</option>
    </select>
  </div>
);

ChooseProductCategory.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ChooseProductCategory;
