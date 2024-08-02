import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import StoneCold from "./components/Cards/StoneCold/StoneCold";
import Footer from "./components/Footer/Footer";
import Logo from '../public/Logos/WrestlerPhotos/StoneColdGlare.bmp'


function App() {
  // Goal For Project:
  // Make Slideshow
  // Slideshow Starts Each Section
  // Gold Animated Border
  // UPDATE GITHUB
  // UPDATE GITHUB
  // UPDATE GITHUB
  return (
    <>
      <Navbar />
      <Banner />
      <h1 className="HomeTitle">WWE</h1>
      <h1 className="HomeTitle">INSERT GALLERY HERE</h1>
      <div className="GalleryImg">
      <img       
                  src={Logo}
                  width={1000}
                  alt="Picture Of Vince Senior"
                />
      </div>
      
      <div className="cards">
        <StoneCold />
        <StoneCold />
        <StoneCold />
      </div>
      <h1 className="HomeTitle">WCW</h1>
      <h1 className="HomeTitle">INSERT GALLERY HERE</h1>
      <div className="GalleryImg">
      <img       
                  src={Logo}
                  width={1000}
                  alt="Picture Of Vince Senior"
                />
      </div>
      <div className="cards">
        <StoneCold />
        <StoneCold />
        <StoneCold />
      </div>
      <Footer/>
    </>
  );
}

export default App;
