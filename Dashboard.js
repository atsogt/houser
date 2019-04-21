import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import store, { UPDATE_HOUSES } from "../store";
import axios from "axios";

export class Dashboard extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      houses: reduxState.houses
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getstate();
      this.setState({ house: reduxState.houses });
    });
    axios.get("/api/house").then(res => {
      this.setState({ houses: res.data });
    });
  }
  deletePost = id => {
    axios.delete(`/api/house/${id}`).then(res => {
      this.setState({ houses: res.data });
    });
  };

  render() {
    let handlePost = this.state.houses.map((val, index) => {
      return (
        <div key={val.id}>
          <img src={val.image} alt={val.name} />
          <p>{val.name}</p>
          <p>{val.price}</p>
          <button onClick={() => this.deletePost(val.id)}>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <h1> Dashboard</h1>
        <Link to="/wizard">
          {" "}
          <button>Add New Property</button>
        </Link>
        {handlePost}
      </div>
    );
  }
}

export default Dashboard;
