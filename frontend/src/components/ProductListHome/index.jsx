import React from "react";
import "./styles.scss";

import { ProductItemHome } from "../ProductItemHome";

export function ProductListHome({ title, description, items }) {
  return (
    <div className="product-listHome-container">
      {title && <h2 className="product-listHome-container__title">{title}</h2>}
      {description && (
        <p className="product-listHome-container__description">{description}</p>
      )}
      <div className="product-listHome-container__item-wrapper">
        {items.map((item, index) => (
          <ProductItemHome
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
