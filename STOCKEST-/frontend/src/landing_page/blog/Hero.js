import React from "react";

function Hero() {
  return (
    
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="./media/blogfront.jpg" style={{width:650}} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>We’re with you, at every step. </h1>
            <h4 style={{color:"blue"}}> With beautiful BLOGS that fits your style</h4>
          <br></br>
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



export default Hero;
