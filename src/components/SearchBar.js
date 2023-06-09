import React, { useState } from "react";

function SearchBar({ stocks, setStocks }) {
  const [sort, setSort] = useState({aSort: true, pSort: false});
  function handleChange(e) {
    setSort({aSort: !sort.aSort, pSort: !sort.pSort});
    if (!sort.aSort) {
      const sortedStocks = stocks.sort((a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0
      })
      setStocks([...sortedStocks]);
    } else {
      const sortedStocks = stocks.sort((a, b) => {
        if (a.price > b.price) return 1
        else if (a.price < b.price) return -1
        else return 0
      })
      setStocks([...sortedStocks]);
    }
  }
  function handleFilter(e) {
    const filteredStocks = stocks.map(stock => {
      if (e.target.value !== stock.type && e.target.value !== 'All') {
        stock.hide = "hidden";
        return stock;
      } else {
        stock.hide = "";
        return stock;
      }
    });
    setStocks([...filteredStocks]);
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="aSort"
          checked={sort.aSort}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="pSort"
          checked={sort.pSort}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
