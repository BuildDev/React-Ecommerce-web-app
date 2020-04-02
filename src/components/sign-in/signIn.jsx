import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/formInput";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handelSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };
  handelChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handelChange={this.handelChange}
            label="Email"
          />
          <label>Email</label>
          <FormInput
            type="password"
            name="password"
            value={password}
            handelChange={this.handelChange}
            label="Password"
          />
          <label>Password</label>
          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
