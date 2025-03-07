import "./App.scss";
import Header from "./header/Header";
import OrganicFashion from "./organic-fashion-block/OrganicFashion";
import ShopCategories from "./categories-block/CategoriesBlock";

function App() {
  return <div className="App">
    <Header />
    <OrganicFashion />
    <ShopCategories />
  </div>;
}

export default App;
