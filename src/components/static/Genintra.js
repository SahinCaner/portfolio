import React from "react";
import { Link } from "react-router-dom";
import ImageZoom from "../image-zoom/ImageZoom";
import Promo from "../common/Promo";

const Genintra = () => {
  return (
    <div className="section section--portfolio">
      <div className="section__item section__item--header">
        <div className="container container--column">
          <h1>GENINTRA</h1>
          <p>
            Designed and developed an employee management system for a Fortune
            500 company.
          </p>
          <ul className="skillset">
            <li>Product Design</li>
            <li>Experience Design</li>
            <li>Front-end Development</li>
          </ul>
        </div>
      </div>
      <div className="section__item section__item--summary section__item--warning">
        <div className="context">
          <div className="container container--column">
            <h2>WARNING</h2>
            <p>
              I'm still working on this case study and the full case-study will
              be published on <strong>December 1st.</strong> In the meantime,
              you can take a look at the screenshots and screen recordings.
            </p>
          </div>
        </div>
      </div>
      <div className="section__item section__item--content">
        <div className="container container--column">
          <div className="context">
            <h1>WHAT IS GENINTRA?</h1>
            <p>
              One of the biggest pharmaceutical companies in Turkey asked us to
              design and develop their web-based internal software to track and
              manage their sales representatives.
            </p>
            <ImageZoom
              src="/images/genintra-1.jpg"
              imageName="genintra-1"
              alt="Homepage of Genintra"
              noBorder
            />

            <h3>FILTERING COMPONENT</h3>
            <div className="image__wrapper">
              <div className="image">
                <div className="video__wrapper">
                  <div className="youtube__wrapper">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/jABTYONJVt8?rel=0"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <div className="aspect__ratio" />
                </div>
              </div>
              <div className="image">
                <div className="video__wrapper">
                  <div className="youtube__wrapper">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/rr62zT1x_kI?rel=0"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <div className="aspect__ratio" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image image--full">
          <img src="/images/genintra-responsive.png" alt="" />
        </div>

        <div className="container container--column">
          <div className="context">
            <h3>SEARCH COMPONENT</h3>
            <div className="image__wrapper">
              <div className="image">
                <div className="video__wrapper">
                  <div className="youtube__wrapper">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/4Iw2Tog2cO0?rel=0"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <div className="aspect__ratio" />
                </div>
              </div>

              <div className="image">
                <div className="video__wrapper">
                  <div className="youtube__wrapper">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/QAiuXOM3hqA?rel=0"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <div className="aspect__ratio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="next__article">
        <Link to="/portfolio/codeit">
          <div className="container container--normal">
            <h4>UP NEXT</h4>
            <h1>CODE.IT</h1>
            <p>Online learning platform for coding.</p>
          </div>
        </Link>

        <img
          src="/images/blank.png"
          alt="Code.it home page"
          style={{
            background: "url(/images/codeit.jpg) no-repeat top left",
            backgroundSize: "cover"
          }}
        />
      </div>

      <Promo />
    </div>
  );
};

export default Genintra;
