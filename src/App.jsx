import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import StoneCold from "./components/Cards/StoneCold/StoneCold";
import Undertaker from "./components/Cards/Undertaker/Undertaker";

function App() {
  // Goal For Project:
  // Make Slideshow
  // Make Component That I Can Use 3 Times
  // Slideshow Starts Each Section
  // Gold Animated Border
  // UPDATE GITHUB
  // UPDATE GITHUB
  // UPDATE GITHUB
  return (
    <>
      <Navbar />
      <Banner />
      <div className="cards">
        <StoneCold />
        <StoneCold />
        <Undertaker />
      </div>
    </>
  );
}

export default App;
