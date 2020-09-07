import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

//Common components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'

//Terminal components
import Terminal from './components/Terminal';

//Inventory components
import InventoryList from './components/InventoryList';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';

//Stylesheet
import "./styles/index.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/terminal" exact component={Terminal}/>
        <Route path="/inventory" exact component={InventoryList}/>
        <Route path="/inventory/add" exact component={CreateItem}/>
        <Route path="/inventory/edit" exact component={EditItem}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
