import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css"; // You can keep the same CSS or create a new one for Sell

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios.post("http://localhost:3002/newSellOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL", // Change the mode to "SELL"
    });

    GeneralContext.closeSellWindow(); // Assuming you have a function to close sell window
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow(); // Assuming you have a close method for Sell window
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
