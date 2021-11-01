import React from "react";
import Home from "./Home";
import {Route, Switch } from "react-router";
import About from "./pages/About";
import contact from "./pages/contact";
import Service from "./pages/Service";


function App() {
  return (
<>
<Switch>
  <Route path="/" exact component={Home}></Route>
  <Route path="/About" component={About}></Route>
  <Route path="/contact" component={contact}></Route>
  <Route path="/Service" component={Service}></Route>

<Home/>
</Switch>
</>
  );
}

export default App;
