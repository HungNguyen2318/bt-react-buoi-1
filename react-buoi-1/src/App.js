import BannerComponent from "./Components/Banner/BannerComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import HeadderComponent from "./Components/Header/HeadderComponent";
import ItemComponent from "./Components/Item/ItemComponent";


function App() {
  return (
    <div className="App">
      <HeadderComponent />
      <BannerComponent />
      <ItemComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
