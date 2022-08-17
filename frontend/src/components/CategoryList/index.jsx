import { useEffect, useState } from "react";
import "./styles.scss";
import { CategoryItem } from "../CategoryItem";
import { CategoriesAPI } from "../../services/categories";

export function CategoryList({ title }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoriesAPI.getCategories().then((response) =>
      setCategories(response.data.content)
    );
  }, []);

  return (
    <div className="category-list-container">
      <h2 className="category-list-container__title">{title}</h2>
      <div className="category-list-container__item-wrapper">
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            imagemUrl={item.imagemUrl}
          />
        ))}
      </div>
    </div>
  );
}
