import "./App.css";
import GlobalContext from "./context/GlobalContext";
import Rutas from "./routes/Rutas";
function App() {
  return (
    <><GlobalContext>
      <Rutas/>
      </GlobalContext>
    </>
  );
}

export default App;
