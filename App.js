import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

//how do i make it automatic and not have refresh when i delete
//how do i repost this to my repository

export default App;
