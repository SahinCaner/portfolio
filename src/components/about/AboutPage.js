import React from "react";
import { Link } from "react-router-dom";
import Promo from "../common/Promo";
import toastr from "toastr";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__item about__item--header">
        <div className="container">
          <div className="column__wrapper">
            <div className="column column--left">
              <h1>Hello, I am Caner.</h1>
              <h4>
                I craft pixels to make people's lives <em>easier</em>.
              </h4>
            </div>
            <div className="column column--right">
              <div className="profile__picture">
                <img
                  src="/images/blank.png"
                  style={{
                    background: `url("/images/profile-picture.jpg") no-repeat top left`,
                    backgroundSize: "cover"
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__item about__item--content">
        <div className="container">
          <div className="column__wrapper">
            <div className="column column--left">
              <h3>
                I'm a user experience professional. I specialize in visual
                design, experience design, and front-end development.
              </h3>

              <p>
                I have founded and worked on a wide range of projects from
                creating social networks to building web portals. Some of them
                include Genintra, Kiyasla,
                <Link to="/portfolio/saglik-ve-yasam"> Saglik ve Yasam</Link>,
                and Material UI.
              </p>

              <p>
                I am really excited about my next career move. I want to work
                for a company that invests in React. I am currently seeking a
                full-time Senior UX/UI position in Los Angeles, CA.
              </p>

              <p>
                If you think I am a good fit for your company, please
                <Link to="/contact"> contact</Link> me.
              </p>
            </div>
            <div className="column column--right" />
          </div>
        </div>
      </div>
      <Promo />
    </div>
  );
};

export default AboutPage;
