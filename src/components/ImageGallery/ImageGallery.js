import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/';
import s from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ images, toggleModal }) {
  return (
    <ul className={s.Gallery}>
      {images.map((item) => (
        <ImageGalleryItem
          key={item.id}
          toggleModal={toggleModal}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
};