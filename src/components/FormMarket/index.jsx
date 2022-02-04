import Proptypes from 'prop-types';
import InputCreateProduct from '../InputCreateProduct';
import IsVirtual from '../IsVirtual/index';

import '../InputCreateProduct/InputCreateProduct.scss';

const FormMarket = ({ handleChange }) => (
  <form className="formMarket">
    <div className="formMarket__input">
      <InputCreateProduct
        handleChange={handleChange}
        name="title"
        label="Titulo"
      />
      <IsVirtual handleChange={handleChange} />
      <div className="inputMarket__category">
        <label className="inputMarket__label" htmlFor="category">
          Categoria
        </label>
        <select
          onChange={handleChange}
          name="category"
          className="inputMarket__input__category"
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
      <InputCreateProduct
        handleChange={handleChange}
        name="description"
        label="Descripcion"
      />
    </div>
  </form>
);

FormMarket.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default FormMarket;
