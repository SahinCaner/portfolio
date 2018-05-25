import React from "react";
import Header from "../common/Header";
import PortfolioList from "./PortfolioList";
import Promo from "../common/Promo";

const PortfolioHomePage = () => {
  return (
    <div className="section">
      <div className="section__item section__item--content">
        <div className="container">
          <PortfolioList />
        </div>
        <Promo />
      </div>
    </div>
  );
};

export default PortfolioHomePage;
