import { CategoryList } from "../../components/CategoryList";
import { ProductList } from "../../components/ProductList";

export function ListScreen() {
  return (
    <div className="home-container">
      <CategoryList />
      <div className="home-container__product-list-wrapper">
        <ProductList
          title="Recomendações"
          description="Descubra os terrenos mais desejados pelos usuários"
          items={productItems}
        />
      </div>
    </div>
  );
}
