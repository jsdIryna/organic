import "./App.scss";
import Header from "./header/Header";
import OrganicFashion from "./organic-fashion-block/OrganicFashion";
import ShopCategories from "./categories-block/CategoriesBlock";
import NEWCollection from "./new-collection/NewCollection";
import AboutUs from "./about-block/AboutUs";
import FollowUs from "./submit-form/FollowUs";

const shopCategoriesData = {
  title: "SHOP BY CATEGORIES",
  images: [
    { src: "/assets/Categories1.svg", className: "image-1", alt: "Category 1" },
    { src: "/assets/Categories2.svg", className: "image-2", alt: "Category 2" },
    { src: "/assets/Categories3.svg", className: "image-3", alt: "Category 3" },
    { src: "/assets/Categories4.svg", className: "image-4", alt: "Category 4" },
  ],
  longImage: { src: "/assets/Categories5.svg", className: "long-image", alt: "Long Category" }
};

function App() {
  return (
    <div className="App">
      <Header />
      <OrganicFashion />
      <ShopCategories {...shopCategoriesData} />
      <NEWCollection />
      <AboutUs />
      <FollowUs />
    </div>
  );
}

export default App;
