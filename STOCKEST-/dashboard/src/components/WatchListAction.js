import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(uid);
  };

  const handleSellClick = () => {
    openSellWindow(uid);
  };

  return (
    <span className="actions">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        onClick={handleSellClick}
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchListActions;
