import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import Home from "./components/Home"
import Terminal from "./components/terminal/Terminal"
import Inventory from "./components/inventory/Inventory"


function App() {
  return (
    <Router>
      <div clasSName="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/terminal" exact component={Terminal} />
        <Route path="/inventory" exact component={Inventory} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
