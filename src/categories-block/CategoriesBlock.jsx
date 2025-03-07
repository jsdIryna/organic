import './CategoriesBlock.scss';

const ShopCategories = () => {
  return (
    <div className="shop-categories">
      <h2 className="shop-title">SHOP BY CATEGORIES</h2>
      <div className="image-container">
        <img src="/assets/Categories1.svg" className="image-1" alt="Category 1" />
        <img src="/assets/Categories2.svg" className="image-2" alt="Category 2" />
        <img src="/assets/Categories3.svg" className="image-3" alt="Category 3" />
        <img src="/assets/Categories4.svg" className="image-4" alt="Category 4" />
      </div>
      <img src="/assets/Categories5.svg" className="long-image" alt="Long Category" />
    </div>
  );
};

export default ShopCategories;
