import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, portfolio, setPortfolio }) {
  const stockList = stocks.map(stock => {
    return (
      <Stock key={stock.id} stock={stock} portfolio={portfolio} setPortfolio={setPortfolio} />
    )
  })
  return (
    <div className="stockCont">
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
