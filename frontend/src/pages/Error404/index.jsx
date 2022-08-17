import { Link } from "react-router-dom";
import Caution from "../../assets/img/caution.svg";
import Helmet from 'react-helmet';

import "./styles.scss";

export function Error404() {
  return (
    <div className="error-container">
      <Helmet>
        <title>Erro | Alugaverso</title>
      </Helmet>
      <div className="error-container__content">
        <img
          src={Caution}
          alt="Checado"
          className="error-container__content__checked"
        />
        <h1 className="error-container__content__title">
        Erro 404...
        </h1>
        <p className="error-container__content__text">
        A página que você acessou está quebrada ou indisponível.
        </p>
        <Link to="/">
          <button className="error-container__content__button">
           Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}