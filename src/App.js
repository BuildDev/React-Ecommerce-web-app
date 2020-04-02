import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shopePage/shopePage";
import Header from "./components/header/header";

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
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
