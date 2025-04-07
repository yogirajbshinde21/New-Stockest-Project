import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const BuyWindow = () => {
  const { activeStock, showBuyWindow, closeBuyWindow } = useContext(GeneralContext);

  if (!showBuyWindow) return null;

  const handleBuy = () => {
    console.log(`Buying stock: ${activeStock}`);
    closeBuyWindow(); // Close after buying
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Buy {activeStock}</h2>
        {/* Additional form elements for buying */}
        <button onClick={handleBuy}>Confirm Buy</button>
        <button onClick={closeBuyWindow}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyWindow;
