import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Foodtball from "./games/Football";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Landing" element={<Landing/>}/>
      <Route path="/Foodball" element={<Foodtball/>}/>
     </Routes>
    </>
  );
}

export default App;
