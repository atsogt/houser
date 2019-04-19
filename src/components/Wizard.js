import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { name, address, city, state, zip } = this.state;
    const values = { name, address, city, state, zip };
    return (
      <div>
        <h1>Wizard</h1>
        <header className="cancelBtn">
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </header>
        {/* -------------- */}
        <label>
          Property Name
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Address
          <input type="text" name="address" onChange={this.handleChange} />
        </label>
        <label>
          City
          <input />
        </label>
        <label>
          State
          <input />
        </label>
        <label>
          Zip
          <input />
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default Wizard;
