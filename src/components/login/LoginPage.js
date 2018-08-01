import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/authActions";
import LoginForm from "../login/LoginForm";

export class LoginPage extends React.Component {
  onLogin = ({ email, password }) => {
    this.props.startLogin(email, password).then(() => {
      this.props.history.push(`/`);
    });
  };

  render() {
    return (
      <div className="wrapper wrapper--login">
        <div className="login__wrapper">
          <div className="login__item login__item--top">
            <h1>Portfolio Login</h1>
            <Link to="/home" className="back">
              &#x2190; Go back{" "}
            </Link>
          </div>
          <div className="login__item login__item--bottom">
            <LoginForm onLogin={this.onLogin} />
          </div>

          {this.props.loginError && (
            <div className="login__error">
              {this.props.loginError === "auth/invalid-email" && (
                <p>Please enter valid email.</p>
              )}

              {this.props.loginError === "auth/user-not-found" && (
                <p>User is not found. Please try another e-mail.</p>
              )}

              {this.props.loginError === "auth/wrong-password" && (
                <p>Wrong password. Please try again.</p>
              )}
            </div>
          )}

          <ul className="info__list">
            <li>
              If you are a{" "}
              <strong>
                <em>
                  <u>recruiter</u>
                </em>
              </strong>{" "}
              , please send an email to{" "}
              <a href="mailto:canersahin@gmail.com">canersahin@gmail.com</a> to
              request access to my portfolio.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
