import "./App.scss";
import Header from "./header/Header";
import OrganicFashion from "./organic-fashion-block/OrganicFashion";
import ShopCategories from "./categories-block/CategoriesBlock";
import NEWCollection from "./new-collection/NewCollection";
import AboutUs from "./about-block/AboutUs";
import FollowUs from "./submit-form/FollowUs";

function App() {
  return <div className="App">
    <Header />
    <OrganicFashion />
    <ShopCategories />
    <NEWCollection />
    <AboutUs />
    <FollowUs />
  </div>;
}

export default App;
