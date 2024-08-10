import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Logo from "/Logos/WrestlerPhotos/StoneColdGlare.bmp";
import Beer from "/Logos/WrestlerPhotos/StoneColdBeer.bmp";
import Undertaker from '/Logos/WrestlerPhotos/TheUndertaker.bmp'
import BretHart from '/Logos/WrestlerPhotos/TheBretHart.bmp'
import StatCard from "./components/Cards/StatCard/StatCard";
import Carousel from "./components/Carousel";

function App() {
  // UPDATE GITHUB
  // UPDATE GITHUB
  // UPDATE GITHUB

  const slides = [Logo, Undertaker, BretHart];
  return (
    <>
      <Navbar />
      <h1 className="HomeTitle">WWE</h1>
      {/* <h1 className="HomeTitle">INSERT GALLERY HERE</h1> */}
      <div className="GalleryImg">
        {/* <img src={Logo} width={1000} alt="Picture Of Vince Senior" /> */}
        <Carousel images={slides}/>
      </div>
      <div className="cards">
        <StatCard wrestlerName={"Stone Cold Steve Austin"} />
        <StatCard wrestlerName={"Bret 'The Hitman' Hart"} />
        <StatCard wrestlerName={"The Undertaker"} />
      </div>
      <h1 className="HomeTitleWCW">WCW</h1>
      <h1 className="HomeTitle">INSERT GALLERY HERE</h1>
      <div className="GalleryImg">
        <img src={Logo} width={1000} alt="Picture Of Vince Senior" />
      </div>
      <div className="cards">
        <StatCard wrestlerName={"Goldberg"} />
        <StatCard wrestlerName={"Ric Flair"} />
        <StatCard wrestlerName={"Sting"} />
      </div>
      <Footer />
    </>
  );
}

export default App;
