import React from "react";

function Stock({ stock, portfolio, setPortfolio }) {
  function handleClick(e) {
    if (e.target.parentNode.parentNode.parentNode.className === "stockCont") {
      setPortfolio([...portfolio, stock]);
    } else {
      setPortfolio([...portfolio].filter(portEl => portEl.id !== stock.id));
    }
  }
  return (
    <div className={stock.hide}>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: ${stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
