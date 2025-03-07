import './OrganicFashion.scss';
const OrganicFashion = () => {
  return (
    <div className="organic-fashion-container">
      <div className="image-container">
      <img src="/assets/firstIcon.svg" alt="Icon" className="icon" />
      </div>
      <div className="text-container">
        <div className="heading">ORGANIC FASHION</div>
        <div className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <button className="shop-now-button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default OrganicFashion;
