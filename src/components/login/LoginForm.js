import React, { Component } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginAuthentication: {
        email: "",
        password: ""
      },
      errors: {},
      login: false
    };
  }

  loginFormIsValid = () => {
    let formIsValid = true;
    let errors = {};

    if (this.state.loginAuthentication.email === "") {
      errors.email = "You must enter email";
      formIsValid = false;
    }

    if (this.state.loginAuthentication.password === "") {
      errors.password = "You must enter password";
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  };

  updateLoginState = e => {
    const field = e.target.name;
    let loginAuthentication = Object.assign({}, this.state.loginAuthentication);
    loginAuthentication[field] = e.target.value;
    return this.setState({ loginAuthentication });
  };

  onLogin = e => {
    e.preventDefault();
    if (!this.loginFormIsValid()) {
      return;
    }
    this.setState({ login: true });

    const loginAuthentication = {
      ...this.state.loginAuthentication
    };
    this.setState({ errors: {} });
    this.props.onLogin(loginAuthentication);
  };

  render() {
    return (
      <form>
        <TextInput
          name="email"
          label="Email"
          value={this.state.loginAuthentication.email}
          onChange={this.updateLoginState}
          error={this.state.errors.email}
          placeholder="Enter email."
        />
        <TextInput
          password
          name="password"
          label="Password"
          value={this.state.loginAuthentication.password}
          onChange={this.updateLoginState}
          error={this.state.errors.password}
          placeholder="Enter password."
        />
        <div className="input__group">
          <button
            type="submit"
            disabled={this.state.login}
            className="btn btn--primary btn--login"
            onClick={this.onLogin}
          >
            {this.state.login ? "SIGNING IN..." : "LOGIN"}
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
