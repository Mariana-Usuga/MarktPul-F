import PropTypes from 'prop-types';

import '../styles/components/IsVirtual.scss';

const AddressMarket = ({ handleChange }) => (
  <form className="formAddressMarket">
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="adress">
        Dirección
      </label>
      <input
        onChange={handleChange}
        className="formAddressMarket__input"
        id="address"
        type="text"
        name="address"
      />
    </div>
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="country">
        Pais
      </label>
      <input
        onChange={handleChange}
        className="formAddressMarket__input"
        id="country"
        type="text"
        name="country"
      />
    </div>
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="moreDetails">
        Mas Detalles
      </label>
      <input
        onChange={handleChange}
        className="formAddressMarket__input__moreDetail"
        id="moreDetails"
        type="text"
        name="moreDetails"
      />
    </div>
    <div className="formAddressMarket__div">
      <label className="formAddressMarket__label" htmlFor="city">
        Ciudad
      </label>
      <input
        onChange={handleChange}
        className="formAddressMarket__input"
        id="city"
        type="text"
        name="city"
      />
    </div>
  </form>
);

AddressMarket.propTypes = {
  handleChange: PropTypes.string.isRequired,
};

export default AddressMarket;
