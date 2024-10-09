
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pokemons from "./Pages/Pokemons.jsx";
import Countries from "./Pages/Countries.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
