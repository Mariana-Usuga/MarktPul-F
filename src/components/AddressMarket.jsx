import PropTypes from 'prop-types';

import '../styles/components/IsVirtual.scss';

const AddressMarket = ({ handleChange }) => (
  <form className="formAddressMarket">
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="number">
        Dirección
        <input
          onChange={handleChange}
          className="dataContainer__input"
          id="address"
          type="text"
          name="address"
        />
      </label>
    </div>
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="number">
        Pais
        <input
          onChange={handleChange}
          className="dataContainer__input"
          id="address"
          type="text"
          name="address"
        />
      </label>
    </div>
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="number">
        Mas Detalles
        <input
          onChange={handleChange}
          className="dataContainer__input"
          id="address"
          type="text"
          name="address"
        />
      </label>
    </div>
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="number">
        Ciudad
        <input
          onChange={handleChange}
          className="dataContainer__input"
          id="address"
          type="text"
          name="address"
        />
      </label>
    </div>
  </form>
);

AddressMarket.propTypes = {
  handleChange: PropTypes.string.isRequired,
};

export default AddressMarket;
