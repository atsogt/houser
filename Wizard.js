import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      image: "",
      price: "",
      redirect: false
    };
  }

  componentDidMount() {
    axios.get("/api/house").then(res => {
      this.setState({ houses: res.data });
    });
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePost = e => {
    const { name, image, price } = this.state;
    axios
      .post("/api/house", { name: name, image: image, price: price })
      .then(res => {
        {
          this.setState({
            houses: res.data,
            redirect: true
          });
        }
      });
  };

  render() {
    console.log(this.state.price);
    return (
      <div>
        <h1> Wizard</h1>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <div>
          <input
            name="name"
            placeholder="Property Name"
            onChange={this.handleChange}
          />
          <input
            name="image"
            placeholder="Image"
            onChange={this.handleChange}
          />
          <input
            name="price"
            placeholder="Price"
            onChange={this.handleChange}
          />
          <Link to="/">
            <button onClick={this.handlePost}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Wizard;
