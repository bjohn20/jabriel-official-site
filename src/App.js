import "./App.scss";
import Video from "./assets/storm.mp4";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div id="bg-video">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <Main />
    </>
  );
}

export default App;
