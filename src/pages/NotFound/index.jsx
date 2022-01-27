import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => (
  <div className="notFound__container">
    <div className="notFound__404">404</div>
    <div className="notFound__title">
      Ups! El contenido que busca no se encuentra disponible
    </div>
    <Link to="/">
      <button type="button" className="notFound__button">
        Volver al comercio
      </button>
    </Link>
  </div>
);

export default NotFound;
