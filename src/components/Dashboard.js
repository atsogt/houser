import React, { Component } from "react";
import House from "./House";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    return (
      <Switch>
        <div>
          {/* <House /> */}
          <header>
            <h1> Dashboard</h1>
            <Link to="/wizard">
              <button>Add New Property</button>
            </Link>
          </header>
        </div>
      </Switch>
    );
  }
}

export default Dashboard;
