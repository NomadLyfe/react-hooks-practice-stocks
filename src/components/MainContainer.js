import React, { useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => {
      const sortedStocks = data.sort((a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0
      })
      setStocks(sortedStocks);
    });
  }, [])
  if (!stocks) return <p>Loading...</p>
  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
