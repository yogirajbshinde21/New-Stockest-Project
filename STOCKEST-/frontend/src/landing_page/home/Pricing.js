import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mb-5">
        <img src= "./media/second.png" style={{width:200}}/>
        <img src= "./media/first.png" style={{width:300}}/>
        </div>
      
        <div className="col-6  mb-5">
        <h1 className="mb-3 fs-2">BUILD YOUR </h1>
          <h1 style={{color:"blue"}}>PORTFOLIO</h1>
          <p>
          In league create a basket of stocks and compete in live leaderboard!.
          </p>
          <p>
          Online stock trading has become a dominant force in India's financial markets.
          </p>
          <p>
          Captured a significant market share, growing from 11% in 2017-18 to 57% by 2023.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          </div>
        </div>
      </div>
    
  );
}

export default Pricing;
