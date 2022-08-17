import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDateRange } from "../../context/DateRangeProvider";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useAuth } from "../../providers/AuthProvider";
import { reservations } from "../../services/reservations";
import { UsersAPI } from "../../services/users";
import { DatePicker } from "../DatePicker";
import { toast } from "react-toastify";
import "./styles.scss";
import { isCpf } from "../../utils/validator";

export function ReservationForm({
  land = {
    id: 0,
    name: "",
    category: { name: "" },
    localizationX: "",
    localizationY: "",
    metaverse: { name: "" },
    images: [{ url: "" }],
    reservation: [{ dateInitial: "", dateFinal: "" }],
  },
}) {
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();
  const [windowWidth] = useWindowSize();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState({
    id: 0,
    name: "",
    lastName: "",
    email: "",
  });
  const [cpf, setCpf] = useState("");

  let excludeDateIntervals;

  if (land.reservation.length > 0 && land.reservation[0].dateInitial) {
    excludeDateIntervals = land.reservation.map((reservation) => {
      return {
        start: new Date(reservation.dateInitial),
        end: new Date(reservation.dateFinal),
      };
    });
  }


  useEffect(() => {
    UsersAPI.fetchMe().then((res) => setUser(res.data));
  }, []);

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (land.id === 0 || user.id === 0) return;
    if (!cpf) {
      return toast("O campo de CPF é obrigatório.", {
        type: "warning",
        theme: "dark",
      });
    }

    if (!isCpf(cpf)) {
      return toast("CPF inválido", {
        type: "warning",
        theme: "dark",
      });
    }

    const data = {
      dateInitial: dayjs(startDate).format("YYYY-MM-DDTHH:MM:ss"),
      dateFinal: dayjs(endDate).format("YYYY-MM-DDTHH:MM:ss"),
      user: {
        id: user.id,
      },
      land: {
        id: land.id,
      },
    };

    reservations
      .makeReservation(token, data)
      .then(() => {
        navigate("/success");
      })
      .catch(() => {
        toast("Houve um erro durante o processamento da reserva.", {
          type: "error",
          theme: "dark",
        });
      });
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <section className="reservation-personal-data">
        <h3>COMPLETE SEUS DADOS</h3>
        <div className="reservation-personal-data__inputs">
        <div className="reservation-personal-data--field-group">
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="name">Nome</label>
            <input type="text" disabled name="name" value={user.name} />
          </div>
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" disabled name="lastName" value={user.lastName} />
          </div>
        </div>
         
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input type="email" disabled name="email" value={user.email} />
          </div>
          <div className="reservation-personal-data__inputs__input-wrapper">
            <label htmlFor="name">CPF</label>
            <input type="text" name="cpf" onChange={handleCpfChange} />
          </div>
        </div>
      </section>
      <section className="reservation-date-range">
        <h3>SELECIONE A DATA DA RESERVA</h3>
        <DatePicker
          inline={true}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          monthsShown={windowWidth >= 768 ? 2 : 1}
          excludeDateIntervals={excludeDateIntervals}
        />
      </section>
      <section className="reservation-hour">
        <h3>SOBRE O USO DO TERRENO</h3>

          <p>
            Seu terreno estará disponível para você das{" "}
            <span className="black">00:00</span> do dia de início de reserva até
            às <span className="black">23:59</span> da data de término.
          </p>
      </section>
      <section className="reservation-details">
        <div>
          <h3 className="reservation-details__form-title">
            DETALHES DA RESERVA
          </h3>
          <div className="reservation-details__container">
              <img src={land.images[0].url} alt="Imagem principal do terreno" />

            <div className="reservation-details__text-content">
              <p className="reservation-details__category">
                {land.category.name}
              </p>
              <p className="reservation-details__title">
                Land ({land.localizationX}, {land.localizationY})
              </p>
              <p className="reservation-details__metaverse">
              {land.metaverse.name}
                <FaMapMarkerAlt
                  style={{ marginLeft: "14px", fontSize: "18px" }}
                />
              </p>
              <div className="reservation-details__divider"></div>
              <div className="reservation-details__date">
                <p className="reservation-details__date__label">
                  Check in
                </p>
                <p className="reservation-details__date__value">
                  {startDate && dayjs(startDate).format("DD/MM/YYYY")}
                </p>
              </div>
              <div className="reservation-details__divider"></div>
              <div className="reservation-details__date">
                <p className="reservation-details__date__label">
                  Check out
                </p>
                <p className="reservation-details__date__value">
                  {endDate && dayjs(endDate).format("DD/MM/YYYY")}
                </p>
              </div>
              <div className="reservation-details__divider"></div>
              <button type="submit">Confirmar reserva</button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
