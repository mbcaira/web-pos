import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Terminal from "./components/Terminal";
import Inventory from "./components/Inventory";

function App() {
  return (
    <Router>
      <div>
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
