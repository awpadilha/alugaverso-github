import { useEffect, useState } from "react";
import { CategoryList } from "../../components/CategoryList";

import { ProductListHome } from "../../components/ProductListHome";
import { SearchBlock } from "../../components/SearchBlock";
import { LandsAPI } from "../../services/lands";
import { RegisterHome } from "../../components/RegisterHome"
import Helmet from 'react-helmet';

import "./styles.scss";

export function Home() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    LandsAPI.getLands().then((response) => setLands(response.data.content));
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Alugaverso</title>
      </Helmet>
      <SearchBlock />
      <CategoryList title="Buscar por tipo de interesse" />
      <div className="home-container__product-listHome-wrapper">
        <ProductListHome
          title="Terrenos mais populares"
          description="Descubra nossos terrenos mais populares"
          items={lands}
        />
      </div>
      <RegisterHome />
    </div>
  );
}
