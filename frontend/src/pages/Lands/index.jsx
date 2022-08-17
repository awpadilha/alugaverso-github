import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { ProductList } from "../../components/ProductList";
import { LandsAPI } from "../../services/lands";
import { MetaversesAPI } from "../../services/metaverses";

import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import Helmet from "react-helmet";

import "./styles.scss";
import { CategoriesAPI } from "../../services/categories";

export function Lands() {
  const [lands, setLands] = useState([]);
  const [metaverse, setMetaverse] = useState({});
  const [searchParams] = useSearchParams();
  const [categoryId, setCategoryId] = useState("");
  const [metaverseId, setMetaverseId] = useState("");
  const [category, setCategory] = useState(null);
  const [metaverseName, setMetaverseName] = useState("Decentraland");
  const [initialDate, setInitialDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCategoryId(searchParams.get("categoryId"));
    setMetaverseId(searchParams.get("metaverseId"));
    setMetaverseName(searchParams.get("metaverseName"));
    setInitialDate(searchParams.get("initialDate"));
    setEndDate(searchParams.get("endDate"));
  }, [searchParams]);

  useEffect(() => {
    // Search by category
    if (categoryId) {
      LandsAPI.filterByCategory(categoryId).then((response) =>
        setLands(response.data)
      );
      CategoriesAPI.getCategories().then((response) => {
        const selectedCategory = response.data.content.find(
          (categoryItem) => categoryItem.id === +categoryId
        );
        setCategory(selectedCategory);
      });
    }
    // Search by metaverse
    if (metaverseId) {
      LandsAPI.filterByMetaverse(metaverseId).then((response) =>
        setLands(response.data)
      );
      MetaversesAPI.getMetaverses().then((response) => {
        const selectedMetaverse = response.data.content.find(
          (metaverseItem) => metaverseItem.id === +metaverseId
        );
        setMetaverse(selectedMetaverse);
      });
    }
    // Search by date and metaverse
    if (metaverseName && initialDate && endDate) {
      LandsAPI.filterByDatesAndMetaverse(
        metaverseName,
        initialDate,
        endDate
      ).then((response) => setLands(response.data));

      MetaversesAPI.getMetaverses().then((response) => {
        const selectedMetaverse = response.data.content.find(
          (metaverseItem) => metaverseItem.name === metaverseName
        );
        setMetaverse(selectedMetaverse);
      });
    }
  }, [metaverseName, initialDate, endDate, metaverseId, categoryId]);

  const bannerUrl = category ? category.imagemUrl : metaverse.imagemUrl;
  const resultsTitle = category ? category.name : "Terrenos disponíveis";

  return (
    <div className="lands-page">
      <Helmet>
        <title>Lands | Alugaverso</title>
      </Helmet>
      <div className="lands-page__return-btn">
        <button onClick={() => navigate(-1)}>
          <Arrow />
        </button>
      </div>

      <div
        className="lands-page__banner-img"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      ></div>

      <h3 className="lands-page__title">{resultsTitle}</h3>
      <ProductList items={lands} />
    </div>
  );
}
