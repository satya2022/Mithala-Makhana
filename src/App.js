import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import GridOne from "./components/Gridone";
import Typesofmakhana from "./components/Typesofmakhana";
import Farmingpage from "./Farmingpage";
import "./App.css";

function App() {
  return (
    <div className="App">

<div id="wrapper">
      <Navbar />
      <Herosection/>
      <GridOne/>
      <Typesofmakhana/>
      <Farmingpage/>
    </div>

    </div>
  );
}

export default App;
