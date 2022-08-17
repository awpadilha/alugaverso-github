import { useNavigate } from "react-router-dom";
import "./styles.scss";

export function CategoryItem({ id, name, description, imagemUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/lands?categoryId=${id}`);
  };

  return (
    <div className="category-item-container" onClick={handleClick}>
      <img
        className="category-item-container__image"
        src={imagemUrl}
        alt={name}
      />
      <div className="category-item-container__text-content">
        <strong className="category-item-container__title">{name}</strong>
        <span className="category-item-container__quantity">{description}</span>
      </div>
    </div>
  );
}
