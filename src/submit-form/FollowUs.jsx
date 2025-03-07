import "./FollowUs.scss";

const FollowUs = () => {
  return (
    <div className="follow-us">
      <div className="follow-us__form">
        <h2 className="follow-us__title">FOLLOW US</h2>
        <form className="follow-us__fields">
          <input type="text" placeholder="Enter your name" className="follow-us__input" />
          <input type="email" placeholder="Enter a valid email address" className="follow-us__input" />
          <textarea placeholder="Enter your message" className="follow-us__textarea"></textarea>
        </form>
        <button className="follow-us__button">SUBMIT</button>
      </div>
      <div className="follow-us__image-container">
        <img src="/assets/FollowUs.svg" alt="Follow Us" className="follow-us__image" />
      </div>
    </div>
  );
};

export default FollowUs;
