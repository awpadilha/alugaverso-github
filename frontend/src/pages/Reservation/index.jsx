import "./styles.scss";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import { ReservationForm } from "../../components/ReservationForm";
import { Info } from "../../components/Info";
import Helmet from "react-helmet";

export function Reservation() {
  const [land, setLand] = useState();
  const { landId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`lands/${landId}`)
      .then((response) => {
        setLand(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [landId]);

  return (
    <div className="reservation-wrapper">
      <Helmet>
        <title>Reserva | Alugaverso</title>
      </Helmet>
      <div className="reservation-wrapper__button-view">
        <button className="button" onClick={() => navigate(-1)}>
          <Arrow />
        </button>
      </div>
      <ReservationForm land={land} />
      <Info />
    </div>
  );
}
