import "./App.scss";
import Header from "./header/Header";
import OrganicFashion from "./organic-fashion-block/OrganicFashion";
import ShopCategories from "./categories-block/CategoriesBlock";
import NEWCollection from "./new-collection/NewCollection";

function App() {
  return <div className="App">
    <Header />
    <OrganicFashion />
    <ShopCategories />
    <NEWCollection />
  </div>;
}

export default App;
