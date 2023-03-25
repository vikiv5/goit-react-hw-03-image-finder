import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from './ImageGallery.styled';


export const ImageGallery = ({ items, onClick }) => {
    return (
      <Gallery>
        {items.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal = {onClick}
          />
        ))}
      </Gallery>
    );
  };
  
  
  
  