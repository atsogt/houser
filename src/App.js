import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";
import { HashRouter, Link } from "react-router-dom";

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

export default App;
