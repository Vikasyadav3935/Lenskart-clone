import Carousel from "./Componets/Carousel/Carousel";
import Banner from "./Componets/Silder/Banner";
import Silder from "./Componets/Silder/Silder";
import AllRoutes from "./Pages/AllRoutes";
import "swiper/css/bundle";
import './Componets/Carousel/Caro.css'
import Pro from './Componets/Carousel/Data/Glasses.json'
import Bannerimg from "./Componets/Banner/Banner";
import Text from "./Componets/Text/Text";


function App() {

  
  return (
    <div className="App">
     <Silder/>  
     <Banner/>
     <Carousel value={Pro}/>
     <Bannerimg img="https://static1.lenskart.com/media/desktop/img/Nov22/19-Nov/party12.jpg"/>
     <Text text="As Seen On Kiara"/>
     <Bannerimg img="https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg"/>
     <Text text=" Aquacolor - Glam Up With Color Lenses"/>
     <Bannerimg img="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"/>

     <Text text="As Seen At New York Fashion Week"/>
     <Bannerimg img="https://static1.lenskart.com/media/desktop/img/Oct22/nyfw/web%20banner.gif"/>
     <Text text="OUR BRANDS"/>
     <Bannerimg img="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"/>
    </div>
  );
}

export default App;

