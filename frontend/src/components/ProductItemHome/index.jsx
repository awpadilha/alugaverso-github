import { useNavigate } from "react-router-dom";
import "./styles.scss";

export function ProductItemHome({
  id,
  name,
  localizationX,
  localizationY,
  price,
  imagemUrl,
  imagemTitle,
}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/lands/${id}`);
  };

  return (
    <div className="product-itemHome-container">
      <div className="product-itemHome-container__image-wrapper">
        <img
          className="product-itemHome-container__image"
          src={imagemUrl}
          alt={imagemTitle}
        />
      </div>

      <div className="product-itemHome-container__wrapper">
        <div className="product-itemHome-container__wrapper-title"><span className="product-itemHome-container__title">{name}</span></div>

        <span className="product-itemHome-container__location">
          Land ({localizationX}, {localizationY})
        </span>

        <div className="product-itemHome-container__description">
          Alugue a partir de           <span>R${price}/dia</span>
        </div>
        <div className="product-itemHome-container__divider">
          {/* <div className="divider__stroke"></div> */}
        </div>
        <button
          onClick={handleRedirect}
          className="product-itemHome-container__button"
        >
          Confira
        </button>

      </div>
    </div>
  );
}
