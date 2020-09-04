import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import SaleTerminal from "./components/sale-terminal.component";
import InventoryList from "./components/inventory-list.component";
import InventoryAdd from "./components/inventory-add.component";
import InventoryUpdate from "./components/inventory-update.component";
import CreateUser from "./components/create-user.component";


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
