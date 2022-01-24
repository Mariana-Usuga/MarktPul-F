import './ShipmentSummary.scss';

const ShipmentSummary = () => (
  <div className="shipmentSummary">
    <div className="shipmentSummary__title">
      <h2>Resumen del envio</h2>
    </div>
    <h4 className="addressTitle">Direccion de envio</h4>
    <div className="containerDiv">
      <div className="itemDiv">
        <span className="itemDiv__place">Mi casa</span>
        <span className="itemDiv__address">
          Calle Falsa 123, Barrio Siempre viva
        </span>
      </div>
      <span className="itemDiv__change">Cambiar de direccion</span>
      <div className="totalShipping">
        <span className="totalShipping__total">Total Envio</span>
        <span className="totalShipping__price">$ 45.000</span>
      </div>
    </div>
  </div>
);

export default ShipmentSummary;
