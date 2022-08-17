import Confirm from "../../assets/img/confirm-logo.svg";
import Helmet from 'react-helmet';

import "./styles.scss";
import { Link } from "react-router-dom";

export function Success() {
  return (
    <div className="success-container">
      <Helmet>
        <title>Sucesso | Alugaverso</title>
      </Helmet>
      <div className="success-container__content">
        <img
          src={Confirm}
          alt="Checado"
          className="success-container__content__checked"
        />
        <h1 className="success-container__content__title">
          Agradecemos a sua preferência!
        </h1>
        <p className="success-container__content__text">
          Sua reserva foi concluída com sucesso
        </p>
        <Link to="/">
          <button className="success-container__content__button">
           Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}
