import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery" onClick={onImageClick}>
    {images.map(({ webformatURL, tags, id }) => (
      <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
    ))}
  </ul>
);



export default ImageGallery;