import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  };

  handlChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handlChange}
          name="firstName"
          value={this.state.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handlChange}
          name="lastName"
          value={this.state.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={this.handlChange}
          name="email"
          value={this.state.email}
        />
        <textarea
          value={this.state.comments}
          placeholder="Comments"
          onChange={this.handlChange}
          name="comments"
        />
        <input
          type="checkbox"
          id="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handlChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />

        <fieldset>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={this.state.employment === "unemployed"}
            onChange={this.handlChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={this.state.employment === "part-time"}
            onChange={this.handlChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={this.state.employment === "full-time"}
            onChange={this.handlChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
          id="favColor"
          value={this.state.favColor}
          onChange={this.handlChange}
          name="favColor"
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
