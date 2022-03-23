import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Video from "./assets/storm.mp4";

function App() {
  return (
    <>
      <div id="bg-video">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <Header />
      <Footer />
    </>
  );
}

export default App;
