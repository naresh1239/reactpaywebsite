import React from "react";
import Home from "./Home";
import {Route,Switch } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contactme from "./pages/Contactme";


function App() {
  return (
<>

<Switch>
  <Route path="/" exact component={Home}></Route>
  <Route path="/About" component={About}></Route>
  <Route path="/Service" component={Service}></Route>
  <Route path="/Contact" component={Contactme}></Route>
</Switch>
</>
  );
}


export default App;
