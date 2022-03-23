import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Map from "./components/Map";
import Launch from "./components/Launch";
// import Done from "./components/Done";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Map />
      <Launch />
    </div>
  );
}

export default App;
