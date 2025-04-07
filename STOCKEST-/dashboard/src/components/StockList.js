import React from "react";
import { useGeneralContext } from "./GeneralContext";

const StockList = () => {
  const { openBuyWindow, openSellWindow } = useGeneralContext();

  return (
    <div>
      <button onClick={() => openBuyWindow("stock-123")}>Buy Stock</button>
      <button onClick={() => openSellWindow("stock-123")}>Sell Stock</button>
    </div>
  );
};

export default StockList;
