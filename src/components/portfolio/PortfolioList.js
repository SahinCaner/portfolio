import React from "react";
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <div class="portfolio">
      <h1>Case Studies</h1>
      <ul className="portfolio__list">
        <li>
          <Link to="/portfolio/kiyasla">
            <div className="portfolio__item portfolio__item__logo">
              <img src="/images/kiyasla-logo.png" alt="Kiyasla logo" />
            </div>
            <div className="portfolio__item portfolio__item__content">
              <h2>KIYASLA</h2>
              <p>
                Created a website that introduced smarter comparisons between
                electronic products.
              </p>
              <div className="btn btn--link">READ MORE</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/saglik-ve-yasam">
            <div className="portfolio__item portfolio__item__logo">
              <img src="/images/SvYLogo.png" alt="Saglik ve Yasam logo" />
            </div>
            <div className="portfolio__item portfolio__item__content">
              <h2>SAGLIK VE YASAM</h2>
              <p>
                Redesigned and applied new strategies to Saglik ve Yasam to
                attract more organic users from Google searches.
              </p>
              <div className="btn btn--link">READ MORE</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/portfolio/genintra">
            <div className="portfolio__item portfolio__item__logo">
              <img src="/images/genintra-logo.png" alt="Genintra logo" />
            </div>
            <div className="portfolio__item portfolio__item__content">
              <h2>GENINTRA</h2>
              <p>
                Designed and developed an employee management system for a
                Fortune 500 company.
              </p>
              <div className="btn btn--link">READ MORE</div>
            </div>
          </Link>
        </li>
      </ul>
      <h1>Other Projects</h1>
      <ul className="portfolio__list">
        <li>
          <Link to="/portfolio/codeit">
            <div className="portfolio__item portfolio__item__logo">
              <img src="/images/codeit-logo.jpg" alt="code.it logo" />
            </div>
            <div className="portfolio__item portfolio__item__content">
              <h2>CODE.IT</h2>
              <p>Online learning platform for coding.</p>
              <div className="btn btn--link">READ MORE</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioList;
