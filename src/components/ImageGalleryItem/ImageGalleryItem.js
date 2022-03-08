import react from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ largeImageURL, tags, webformatURL, toggleModal}) {
  return (
    <li className={s.GalleryItem} onClick={() => toggleModal(largeImageURL)}>
      <img className={s.ImageGalleryItem__image} src={webformatURL} alt={tags} />
    </li>
  );
};


 ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };


