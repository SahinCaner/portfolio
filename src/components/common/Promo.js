import React from "react";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__item">
        <div className="container container--normal">
          <h1>
            I am currently looking for a UX/UI designer position in Los Angeles,
            CA.
          </h1>
          <h3>If you are interested in working with me contact me now!</h3>
          <Link to="/contact" className="btn btn--primary">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promo;
