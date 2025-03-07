import "./NewCollection.scss";

const NewCollection = () => {
  return (
    <div className="new-collection-container">
      <h2 className="new-collection__title">NEW COLLECTION</h2>

      <div className="new-collection__images">
        <img
          src="/assets/Collection1.svg"
          alt="Collection 1"
          className="new-collection__image"
        />
        <img
          src="/assets/Collection2.svg"
          alt="Collection 2"
          className="new-collection__image"
        />
        <img
          src="/assets/Collection3.svg"
          alt="Collection 3"
          className="new-collection__image"
        />
      </div>

      <div className="new-collection__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </div>
  );
};

export default NewCollection;
