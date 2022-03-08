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
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      {/* <Features  /> */}
      <Grids data-aos="fade-up"/>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
