import React from "react";
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <ul className="portfolio__list">
      <li>
        <Link to="/portfolio/saglik-ve-yasam">
          <div className="portfolio__item portfolio__item__logo">
            <img src="/images/SvYLogo.png" alt="Saglik ve Yasam logo" />
          </div>
          <div className="portfolio__item portfolio__item__content">
            <h2>SAGLIK VE YASAM</h2>
            <p>
              Redesigning and applying new strategies to Saglik ve Yasam to
              attract more organic users from Google searches.
            </p>
            <div className="btn btn--link">READ MORE</div>
          </div>
        </Link>
      </li>

      <li>
        <div className="no__link portfolio__coming__soon">
          <div className="portfolio__tag">
            <p>Coming Soon</p>
          </div>
          <div className="portfolio__item portfolio__item__logo">
            <img src="/images/kiyasla-logo.png" alt="Kiyasla logo" />
          </div>
          <div className="portfolio__item portfolio__item__content">
            <h2>KIYASLA</h2>
            <p>Introducing smarter comparisons.</p>
          </div>
        </div>
      </li>

      <li>
        <div className="no__link portfolio__coming__soon">
          <div className="portfolio__tag">
            <p>Coming Soon</p>
          </div>
          <div className="portfolio__item portfolio__item__logo">
            <img src="/images/genintra-logo.png" alt="Genintra logo" />
          </div>
          <div className="portfolio__item portfolio__item__content">
            <h2>GENINTRA</h2>
            <p>Man management made easy.</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default PortfolioList;
