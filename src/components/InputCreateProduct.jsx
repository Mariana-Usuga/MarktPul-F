import PropTypes from 'prop-types';

const InputCreateProduct = ({ label, handleChange, name }) => (
  <div className="inputProduct">
    <label className="inputProduct__label" htmlFor={label}>
      {label}
    </label>
    <input
      onChange={handleChange}
      name={name}
      className={
        label === 'Descripcion'
          ? 'inputProduct__input__description'
          : 'inputProduct__input'
      }
      type={label === 'Precio' ? 'number' : 'text'}
      id={label}
    />
  </div>
);

InputCreateProduct.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputCreateProduct;
