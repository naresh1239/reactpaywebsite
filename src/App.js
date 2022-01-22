import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contactme from "./pages/Contactme";


function App() {
  return (
<>

<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Service" element={<Service/>}></Route>
  <Route path="/Contact" element={<Contactme/>}></Route>
</Routes>
</>
  );
}


export default App;
