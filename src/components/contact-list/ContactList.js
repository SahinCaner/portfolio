import React from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
  return (
    <ul className="contact__list">
      <li>
        <a href="mailto:canersahin@gmail.com">Say hello</a>
      </li>
      <li>
        <a href="https://www.twitter.com/shncnr" target="_blank">
          twitter
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/canersahin/" target="_blank">
          linkedin
        </a>
      </li>
      <li>
        <a href="https://github.com/SahinCaner" target="_blank">
          github
        </a>
      </li>
      <li>
        <Link to="/portfolio"> <span>&#x1F300;</span> Portfolio </Link>
      </li>
    </ul>
  );
};

export default ContactList;
