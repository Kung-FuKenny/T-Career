//import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MultiItemCarousel from "./MultiItemCarousel";
//import Slider from './silder';
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import Grids from "./components/features/Grids";

import {
  Navbar,
  Header,
  Features,
  Pricing,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <div style={{width: '100%', position: "relative"}}>
      <header  style={{width: "calc(100vw + 20%)!important"}} className="header-bg">
        <Navbar />
        <Header />
      </header>
      {/* <Features  /> */}
      <Pricing data-aos="fade-up"/>
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
