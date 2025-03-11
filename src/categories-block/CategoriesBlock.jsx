import './CategoriesBlock.scss';

const ShopCategories = ({ title, images, longImage }) => {
  return (
    <div className="shop-categories">
      <h2 className="shop-title">{title}</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image.src} className={image.className} alt={image.alt} />
        ))}
      </div>
      <img src={longImage.src} className={longImage.className} alt={longImage.alt} />
    </div>
  );
};

export default ShopCategories;
