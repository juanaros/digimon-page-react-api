import NavB from "./components/Navbar";
import Header from "./components/Hero";
import Digimons from "./components/MiApi";
import Pie from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <NavB />
        <Header text="Encuentra tu Digimon favorito ahora"/>
        <Digimons />
      </div>
      <div>
        <Pie />
      </div>
    </div>
  );
}

export default App;
