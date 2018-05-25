import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ContactList from "../contact-list/ContactList";
import { startLogout } from "../../actions/authActions";

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer__item footer__item--top" />
      <div className="footer__item footer__item--bottom">
        <div className="container">
          <div className="footer__about">
            <p>
              Caner Sahin is a Turkish UX / UI developer living in <br /> Los
              Angeles, CA.
            </p>
          </div>

          <div className="footer__links">
            <ContactList authenticated />
          </div>
        </div>
      </div>
      <div className="footer__item footer__item--signout">
        Design and content © 2018, Caner Sahin.
        <p className="signout" onClick={props.startLogout}><strong>SIGN OUT</strong></p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Footer);

