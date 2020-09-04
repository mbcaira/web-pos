import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SaleTerminal from "./components/SaleTerminal";
import InventoryList from "./components/InventoryList";
import InventoryAdd from "./components/InventoryAdd";
import InventoryUpdate from "./components/InventoryUpdate";
import CreateUser from "./components/CreateUser";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={SaleTerminal} />
        <Route path="/inventory" exact component={InventoryList} />
        <Route path="/inventory/add" exact component={InventoryAdd} />
        <Route path="/inventory/update/:itemNumber" exact component={InventoryUpdate} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
