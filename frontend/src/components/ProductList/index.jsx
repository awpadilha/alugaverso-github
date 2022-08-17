import React from "react";
import "./styles.scss";
import { ProductItem } from "../ProductItem";

export function ProductList({ title, description, items }) {
  return (
    <div className="product-list-container">
      {title && <h2 className="product-list-container__title">{title}</h2>}
      {description && (
        <p className="product-list-container__description">{description}</p>
      )}
      <div className="product-list-container__items-wrapper">
        {items.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            localizationX={item.localizationX}
            localizationY={item.localizationY}
            price={item.price}
            imagemUrl={item.images[0]?.url ?? ""}
            imagemTitle={item.images[0]?.title ?? ""}
          />
        ))}
      </div>
    </div>
  );
}