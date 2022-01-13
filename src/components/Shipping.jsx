import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Shipping = () => (
  <>
    <Header />
    <section className="shipping">
      <div className="notRegistered">
        <h3>¿No estas registrado? ¡Registrate!</h3>
      </div>
      <div className="paymentMethod">
        <h3>Pero antes... Elige tu direccion de envio</h3>
      </div>
      <label className="radio-div shipping--border" htmlFor="saved">
        <input type="radio" name="address" id="saved" />
        Utiliza una direccion ya existente
      </label>
      <div className="saved-address shipping--border">
        <h4>Direccion de envio</h4>
        <div className="saved-address__container">
          <div className="saved-address__description">Mi casa</div>
          <div className="saved-address__address">
            Calle Falsa 123, Barrio Siempre viva
          </div>
          <div className="saved-address__place">Medellín, Colombia</div>
        </div>
      </div>
      <label className="radio-div shipping--border" htmlFor="new">
        <input type="radio" name="address" id="new" />
        Registrar una nueva
      </label>
      <div className="new-address shipping--border">
        <h4>Direccion de envio</h4>
        <div className="new-address__container">
          <div className="new-address__container--left">
            <label htmlFor="new-address__address">
              Direccion
              <input type="text" name="new-address__address" id="address" />
            </label>
            <label htmlFor="new-address__details">
              Mas Detalles
              <textarea type="text" name="new-address__details" id="details" />
            </label>
          </div>
          <div className="new-address__container--right">
            <label htmlFor="country">
              Pais:
              <select id="country">
                <option>Colombia</option>
                <option>Peru</option>
              </select>
            </label>
            <label htmlFor="state">
              Estado o Distrito:
              <select>
                <option>Antoquia</option>
              </select>
            </label>
            <label htmlFor="city">
              Ciudad:
              <select>
                <option>Medellin</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <button className="shipping--button" type="button">
        Proceder al pago
      </button>
    </section>
    <Footer />
  </>
);

export default Shipping;
