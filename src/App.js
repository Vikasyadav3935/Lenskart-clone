import Carousel from "./Componets/Carousel/Carousel";
import Banner from "./Componets/Silder/Banner";
import Silder from "./Componets/Silder/Silder";
import AllRoutes from "./Pages/AllRoutes";
import "swiper/css/bundle";
import './Componets/Carousel/Caro.css'
import Pro from './Componets/Carousel/Data/Glasses.json'
import Bannerimg from "./Componets/Banner/Banner";

function App() {

  
  return (
    <div className="App">
     <Silder/>  
     <Banner/>
     <Carousel value={Pro}/>
     <Bannerimg/>
    </div>
  );
}

export default App;
