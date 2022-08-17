package com.dhbrasil.projetoIntegrador.AlugaVerso.dto;

import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Land;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

public class LandResponseDTO {

    private Integer id;
    private String name;

    private List<ImagesDTO> images = new ArrayList<>();
    private CategoryDTO category;
    private MetaverseDTO metaverse;

    private String localizationX;

    private String localizationY;

    private Double price;

    public LandResponseDTO() {
    }

    public LandResponseDTO(Integer id, String name) {
        this.id = id;
        this.name = name;


    }

    public Land toEntity() {

        Land land = new Land();
        land.setId(this.id);
        land.setName(this.name);
        land.setPrice(this.price);
        land.setLocalizationX(this.localizationX);
        land.setLocalizationY(this.localizationY);
        this.images.forEach(img -> land.getImages().add(img.toEntity()));
        if (this.category != null) land.setCategory(this.category.toEntity());
        if (this.metaverse != null) land.setMetaverse(this.metaverse.toEntity());
        return land;
    }

    public LandResponseDTO(Land land) {
        this.id = land.getId();
        this.name = land.getName();
        this.price = land.getPrice();
        this.localizationX = land.getLocalizationX();
        this.localizationY = land.getLocalizationY();

        this.category = new CategoryDTO(land.getCategory());
        this.metaverse = new MetaverseDTO(land.getMetaverse());
        land.getImages().forEach(image -> this.images.add(new ImagesDTO(image)));

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public List<ImagesDTO> getImages() {
        return images;
    }

    public void setImages(List<ImagesDTO> images) {
        this.images = images;
    }


    public CategoryDTO getCategory() {
        return category;
    }

    public void setCategory(CategoryDTO category) {
        this.category = category;
    }

    public MetaverseDTO getMetaverse() {
        return metaverse;
    }

    public void setMetaverse(MetaverseDTO metaverse) {
        this.metaverse = metaverse;
    }

    public String getLocalizationX() {
        return localizationX;
    }

    public void setLocalizationX(String localizationX) {
        this.localizationX = localizationX;
    }

    public String getLocalizationY() {
        return localizationY;
    }

    public void setLocalizationY(String localizationY) {
        this.localizationY = localizationY;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
