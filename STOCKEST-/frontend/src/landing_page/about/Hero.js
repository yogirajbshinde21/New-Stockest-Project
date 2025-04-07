import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <img src="./media/bigBull.png" style={{width:300}} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3>WHAT IS</h3>
          <h1 style={{width:1000, color:"blue"}}>STOCKEST ?</h1>
          <br></br>
          <p>
          STOCKEST is an experiential stock market learning and learning mobile app. It offers a wide range of fun-filled learning contests in the domain of financial markets that can help users develop financial acumen in a fun and rewarding manner. We also ensure that the adrenaline rush associated with the participation in the actual market is kept intact when a user plays on the app.
          </p>
          <p>
          Play, trade, and win rewards by learning about investments in a fun-filled way with real market movements. With Bullspree, users can build their own portfolios and compete against other Bullspree users.
          </p>
                  
        </div>
        
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          
          <p>
          <h1>Mission</h1>
          <br></br>
          “We strive to disseminate the financial market knowledge in a fun and engaging manner via innovative and experiential mediums.”
          </p>
          <p>
          <h1>Vision</h1>
          <br></br>
<b>Make stock market understanding better </b>
<br></br>
“We envision a world where every individual should feel confident about their abilities of participating in the financial markets”
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="./media/swimBull.png" style={{width:500}}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
