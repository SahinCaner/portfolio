import React from "react";
import { Link } from "react-router-dom";
import Promo from "../common/Promo";
import toastr from "toastr";

const AboutPage = () => {
  return (
    <div className="section section--portfolio section--about">
      <div className="container container--column">
        <div className="context">
          <h1>Hello, I'm Caner.</h1>
          <p>
            I'm a user experience professional. I specialize in visual design,
            experience design, and front-end development. I constantly challenge
            myself to learn new skills and technologies to create
            straightforward, usable, and enjoyable user experiences from concept
            to implementation.
          </p>

          <p>
            I have founded and worked on a wide range of projects from creating
            social networks to building web portals. Some of them include{" "}
            <Link to="/portfolio/genintra">Genintra</Link>,{" "}
            <Link to="/portfolio/kiyasla">Kiyasla</Link>,
            <Link to="/portfolio/saglik-ve-yasam"> Saglik ve Yasam</Link>,
            <Link to="/portfolio/codeit"> Code.it </Link> and Material UI.
          </p>

          <p>
            I am really excited about my next career move. I am currently
            seeking a full-time UX/UI designer position in Los Angeles, CA.
          </p>
          <p>
            If you think I am a good fit for your company, please
            <Link to="/contact"> contact</Link> me.
          </p>
        </div>
      </div>

      <div className="image image--full image--about">
        <img src="/images/aboutme.jpg" alt="" />
      </div>

      <div className="referral">
        <div className="container container--column">
          <p>
            <em>
              "Mr. Sahin distinguished himself by designing and developing an
              exceptional quality UI framework for Venti. We benefited from his
              creative problem-solving skills. His willingness to do whatever it
              takes to take a product to the next level has been one of the key
              factors for our success."
            </em>
          </p>
          <p className="referrer">
            Ozgur Cayci <span>CTO & Founder, Venti</span>
          </p>
        </div>
      </div>
      <Promo />
    </div>
  );
};

export default AboutPage;
