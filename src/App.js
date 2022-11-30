import Carousel from "./Componets/Carousel/Carousel";
import Banner from "./Componets/Silder/Banner";
import Silder from "./Componets/Silder/Silder";
import AllRoutes from "./Pages/AllRoutes";
import "swiper/css/bundle";
import './Componets/Carousel/Caro.css'

function App() {
  return (
    <div className="App">
     <Silder/>  
     <Banner/>
     <Carousel/>
    </div>
  );
}

export default App;
