import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {
  const portfolioList = portfolio.map(stock => {
    return (
      <Stock key={stock.id} stock={stock} portfolio={portfolio} setPortfolio={setPortfolio} />
    )
  })
  return (
    <div className="portCont">
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
