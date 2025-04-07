import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // Import the SellActionWindow component

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {}, // Add openSellWindow to the context
  closeSellWindow: () => {},   // Add closeSellWindow to the context
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // State for Sell window
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // Handle opening and closing Buy window
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // Handle opening and closing Sell window
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow, // Provide the openSellWindow method
        closeSellWindow: handleCloseSellWindow, // Provide the closeSellWindow method
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />} {/* Render Sell window */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
