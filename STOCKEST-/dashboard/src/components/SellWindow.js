import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const SellWindow = () => {
  const { activeStock, showSellWindow, closeSellWindow } = useContext(GeneralContext);

  if (!showSellWindow) return null;

  const handleSell = () => {
    console.log(`Selling stock: ${activeStock}`);
    closeSellWindow(); // Close after selling
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sell {activeStock}</h2>
        {/* Additional form elements for selling */}
        <button onClick={handleSell}>Confirm Sell</button>
        <button onClick={closeSellWindow}>Cancel</button>
      </div>
    </div>
  );
};

export default SellWindow;
