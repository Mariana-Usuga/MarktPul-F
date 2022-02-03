import PropTypes from 'prop-types';
import './InputCreateProduct.scss';

const InputCreateProduct = ({ label, handleChange, name }) => (
  <div className="inputProduct">
    <label
      className={
        label === 'Descripcion'
          ? 'inputProduct__label__des'
          : 'inputProduct__label'
      }
      htmlFor={label}
    >
      {label}
    </label>
    {label === 'Descripcion' ? (
      <textarea
        onChange={handleChange}
        name={name}
        className="inputProduct__input__description"
        type="text"
        id={label}
      />
    ) : (
      <input
        onChange={handleChange}
        name={name}
        className="inputProduct__input"
        type={label === 'Precio' ? 'number' : 'text'}
        id={label}
      />
    )}
  </div>
);

InputCreateProduct.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputCreateProduct;
