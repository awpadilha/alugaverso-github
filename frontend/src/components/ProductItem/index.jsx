import { useNavigate } from "react-router-dom";
import "./styles.scss";

export function ProductItem({
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
    <div className="product-item-container">
      <div className="product-item-container__image-wrapper">
        <img
          className="product-item-container__image"
          src={imagemUrl}
          alt={imagemTitle}
        />
      </div>

      <div className="product-item-container__wrapper">
        <span className="product-item-container__title">{name}</span>

        <span className="product-item-container__location">
          Land ({localizationX}, {localizationY})
        </span>

        <div className="product-item-container__description">
          Alugue a partir de
          <strong> R${price}/dia</strong>
        </div>
        <div className="product-item-container__divider"></div>
        <button
          onClick={handleRedirect}
          className="product-item-container__button"
        >
          Confira
        </button>
      </div>
    </div>
  );
}