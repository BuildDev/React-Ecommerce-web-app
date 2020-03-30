import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shopePage/shopePage";

const hats = () => {
  return (
    <div>
      <h1>hats page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
