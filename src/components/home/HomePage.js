import React from "react";
import { Link } from "react-router-dom";
import ContactList from "../contact-list/ContactList";
import HoverSlider from "../hover-slider/HoverSlider";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImageId: 0,
      images: [
        {
          id: 0,
          imageURL: "/images/profile-picture.jpg",
          tag: "Caner Sahin profile picture",
          imageName: "Profile Picture"
        },
        {
          id: 1,
          imageURL: "/images/genintra.jpg",
          tag: "Genintra home page",
          imageName: "Genintra"
        },
        {
          id: 2,
          imageURL: "/images/kiyasla.jpg",
          tag: "Kiyas.la home page",
          imageName: "Kiyasla"
        },
        {
          id: 3,
          imageURL: "/images/saglik-ve-yasam.jpg",
          tag: "Saglik ve yasam home page",
          imageName: "Saglik ve Yasam"
        },
        {
          id: 4,
          imageURL: "/images/materialui.jpg",
          tag: "Material UI home page",
          imageName: "Material UI"
        }
      ]
    };
  }

  onMouseEnterLink = e => {
    this.setState({
      activeImageId: parseInt(e.target.id)
    });
  };

  onMouseLeaveLink = e => {
    this.setState({
      activeImageId: 0
    });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="main__item">
              <div className="content">
                <h1>
                  Hello, my name is Caner. I'm a user experience professional. I
                  specialize in visual design, experience design, and front-end
                  development.
                </h1>
                <p>
                  I have founded and worked on a wide range of projects from
                  creating social networks to building web portals. Some of them
                  include
                  {this.state.images.map(image => {
                    {
                      /* First picture is profile picture. 
                         Display pictures if has an ID bigger than 0 */
                    }
                    if (image.id !== this.state.images.length - 1) {
                      if (image.id > 0) {
                        return (
                          <span key={image.id}>
                            <Link
                              to="/"
                              id={image.id}
                              className="inline"
                              onMouseEnter={this.onMouseEnterLink}
                              onMouseLeave={this.onMouseLeaveLink}
                            >
                              {" " + image.imageName}
                            </Link>
                            {this.state.images.length - 1 === image.id
                              ? " "
                              : ","}
                          </span>
                        );
                      }
                    } else {
                      /* add ", and" for the last project */
                      return (
                        <span key={image.id}>
                          {" "}
                          and
                          <Link
                            to="/"
                            id={image.id}
                            className="inline"
                            onMouseEnter={this.onMouseEnterLink}
                            onMouseLeave={this.onMouseLeaveLink}
                          >
                            {" " + image.imageName}
                          </Link>.
                        </span>
                      );
                    }
                  })}
                </p>
                <p>
                  I am currently looking for a full-time Senior UX/UI designer position
                  in Los Angeles, CA.
                </p>
                <p>
                  <Link className="btn btn--primary" to="/">
                    PORTFOLIO LOGIN
                  </Link>
                </p>
              </div>
            </div>

            <div className="main__item">
              <ContactList />
            </div>
          </div>
        </div>
        <HoverSlider
          images={this.state.images}
          activeImageId={this.state.activeImageId}
        />
      </div>
    );
  }
}

export default HomePage;
