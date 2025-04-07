import React from "react";

function Awards() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="./media/desktop.png" style={{width:650}} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>MAKE PORTFOLIO! </h1>
            <h3 style={{color:"blue"}}> WITH WEALTHY INVESTMENTS</h3>
          <p className="mb-5">
          keep a track on what to,
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Investment Horizon</p>
                </li>
                <li>
                  <p>Tracking Performance</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p> Rebalancing</p>
                </li>
                <li>
                  <p>Stay Informed</p>
                </li>
                <li>
                  <p>Seek Professional Advice</p>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Awards;
