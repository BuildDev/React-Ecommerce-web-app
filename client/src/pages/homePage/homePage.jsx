import React, { Component } from "react";
import Directory from "../../components/directory/directory";
import "./homePage.scss";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
