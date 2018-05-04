import React from "react";
import { Link } from "react-router-dom";
import ContactList from "../common/contact-list/ContactList";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };
  }

  handleMouseEnter = e => {
    console.log("ENTER");
    this.setState({
      isHovered: true
    });

    e.target.className = "project__link is-visible";
  };

  handleMouseLeave = e => {
    console.log("LEAVE");
    this.setState({
      isHovered: false
    });

    e.target.className = "project__link";
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="main__item">
              <div className="content">
                <h1>
                  I'm Caner Sahin, a Turkish UX Engineer currently living in Los
                  Angeles, California.
                </h1>
                <p>
                  I have founded and worked on a wide range of projects from
                  creating social networks to building web portals. Some of them
                  include
                  <Link
                    to="/"
                    className="project__link"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    Genintra
                    <span>
                      <img
                        src="/images/blank.png"
                        style={{
                          background: `url(/images/genintra.jpg) no-repeat top left`,
                          backgroundSize: `cover`
                        }}
                        alt="Genintra home page"
                      />
                    </span>
                  </Link>,
                  <Link
                    to="/"
                    className="project__link"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    Kiyasla
                    <span>
                      <img
                        src="/images/blank.png"
                        style={{
                          background: `url(/images/kiyasla.jpg) no-repeat top left`,
                          backgroundSize: `cover`
                        }}
                        alt="Kiyas.la home page"
                      />
                    </span>
                  </Link>,
                  {/* <span
                    className={projectClass}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
                  >
                    <Link to="/">Saglik ve Yasam</Link>
                    <span className="image__wrapper">
                      <img
                        src="/images/blank.png"
                        style={{
                          background: `url(/images/saglik-ve-yasam.jpg) no-repeat top left`,
                          backgroundSize: `cover`
                        }}
                        alt="Saglik ve yasam home page"
                      />
                    </span>
                  </span>,
                  
                  <span
                    className={projectClass}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
                  >
                    <Link to="/">Material UI</Link>
                    <span className="image__wrapper">
                      <img
                        src="/images/blank.png"
                        style={{
                          background: `url(/images/materialui.jpg) no-repeat top left`,
                          backgroundSize: `cover`
                        }}
                        alt="Material UI"
                      />
                    </span>
                  </span>, */}
                  with many more in the pipeline.
                </p>
                <p>
                  I’m currently developing more products as the Front End
                  Director of my company, Venti.
                </p>
              </div>
            </div>

            <div className="main__item">
              <ContactList />
            </div>
          </div>
        </div>

        {/* <ul className="background__attractions">
          <li ref="profile" className="is-visible">
            <img
              src="/images/blank.png"
              style={{
                background: `url(/images/profile-picture.jpg) no-repeat top left`,
                backgroundSize: `cover`
              }}
              alt="Caner Sahin profile picture"
            />
          </li>
          <li ref="genintra" />
          <li>
            <img
              src="/images/blank.png"
              style={{
                background: `url(/images/kiyasla.jpg) no-repeat top left`,
                backgroundSize: `cover`
              }}
              alt="Kiyas.la home page"
            />
          </li>
          <li>
            <img
              src="/images/blank.png"
              style={{
                background: `url(/images/saglik-ve-yasam.jpg) no-repeat top left`,
                backgroundSize: `cover`
              }}
              alt="Saglik ve yasam home page"
            />
          </li>

          <li>
            <img
              src="/images/blank.png"
              style={{
                background: `url(/images/materialui.jpg) no-repeat top left`,
                backgroundSize: `cover`
              }}
              alt="Material UI"
            />
          </li>
        </ul> */}
      </div>
    );
  }
}

export default HomePage;
