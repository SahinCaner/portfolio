import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/authActions";

export const Header = ({ startLogout }) => (
  <div className="header">
    <div className="container">
      <div className="header__item">
        <Link to="/portfolio">
          <div className="logo">CS</div>
        </Link>
      </div>
      <div className="header__item">
        <ul className="navigation">
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
