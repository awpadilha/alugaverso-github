import "./styles.scss";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AvailableDatesBlock } from "../AvailableDatesBlock";
import { Info } from "../Info";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import { MdCategory } from "react-icons/md";

import localizadorSvg from "../../assets/img/localizador.svg";
import ImageGallery from "react-image-gallery";

export function ProductDetails() {
  const [land, setLand] = useState();
  const [images, setImages] = useState([]);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const { landId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`lands/${landId}`)
      .then((response) => {
        setLand(response.data);
        setImages(response.data.images);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [landId]);

  if (showFullGallery) {
    // https://www.npmjs.com/package/react-image-gallery
    // https://www.linxtion.com/demo/react-image-gallery/
    return (
      <div className="product_details__image_gallery_container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="product_details__image_gallery_close"
          onClick={() => setShowFullGallery(false)}>[ Fechar ]</a>
        <div className="product_details__image_gallery">
          <ImageGallery
            showFullscreenButton={false}
            showBullets={true}
            showIndex={true}
            autoPlay={true}
            slideInterval={3000}
            items={images.map(img => ({
              original: img.url,
              thumbnail: img.url,
              originalHeight: "500px",
            }))} />
        </div>
      </div>)
  }

  return (
    <div className="container" >
      <div className="product_details">
        <div className="button__view">
          <button className="button" onClick={() => navigate(-1)}>
            <Arrow />
          </button>
        </div>

        <div className="product_details__container">
          <div className="container_item">


            Land&nbsp;({land?.localizationX},{land?.localizationY})

          </div>
          <div className="container_item">
            {land?.category.name}
            <MdCategory className="landIcons__land" />

          </div>
          <div className="container_item">
            {land?.metaverse.name}
            <img
              className="landIcons__localizador"
              src={localizadorSvg}
              alt="logo de pilha"
            />

          </div>
        </div>

      </div>

      <div className="product_details__image_gallery_inline_container">
        <ImageGallery
          showFullscreenButton={false}
          showBullets={true}
          showIndex={true}
          autoPlay={true}
          slideInterval={3000}
          showThumbnails={false}
          items={images.map(img => ({
            original: img.url,
            thumbnail: img.url,
          }))} />
      </div>

      <div className="product_details__container-inline">
        <div className="container_item">

          Land&nbsp;({land?.localizationX},{land?.localizationY})

        </div>
        <div className="container_item">
          {land?.category.name}
          <MdCategory className="landIcons__land" />

        </div>
        <div className="container_item">
          {land?.metaverse.name}
          <img
            className="landIcons__localizador"
            src={localizadorSvg}
            alt="logo de pilha"
          />

        </div>
      </div>

      <div className="product_details__images">

        {images?.map((image, i) => {
          if (i > 4) return '';
          else return (
            <div key={image.id} className={"item item" + (i + 1)}>
              <img
                src={image.url}
                className="product_details__img"
                alt=""
              />
            </div>
          );
        })}
        <div className="product_details__images__show_more">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a onClick={() => setShowFullGallery(true)}>Ver mais</a>
        </div>
      </div>

      <div className="product_details__description">
        <h2>Descrição do Terreno</h2>
        <p>{land?.description}</p>
      </div>

      <div className="product_details__caracteristicas">
        <h2>Características</h2>
        <div className="product_details__caracteristicas--wrapper">
          {land?.attributes.map((attribute) => (
            <div key={attribute.id} className="product-details__attribute">
              <img
                className="product-details__attribute__icon"
                src={attribute.icon}
                alt="icon"
              />
              <span className="product-details__attribute__name">
                {attribute.name}
              </span>
            </div>
          ))}
        </div>
        <div className="divider-mobile-productDetails"></div>

      </div>
      <div className="divider-productDetails-layout"></div>


      <div className="product_details__date">
        <AvailableDatesBlock
          landId={land?.id}
          landPrice={land?.price}
          reservations={land?.reservation}

        />
      </div>
      <Info />
      <div className="divider-productDetails-layout"></div>
      
      <div className="product_details__busca">
        <div className="divider-mobile-productDetails"></div>
        <p>Não encontrou o terreno que gostaria?</p>
        <Link to="/" className="btn_down">Pesquisar mais</Link>
      </div>

    </div>
  );
}

