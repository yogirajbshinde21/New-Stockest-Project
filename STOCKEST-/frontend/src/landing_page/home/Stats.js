import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2> Practice trading with </h2>
          <h1 style={{color:"blue"}}> ₹10,000</h1>
          <h1 style={{color:"red"}}>Virtual Capital  </h1>
          <br></br>
        <ul>
          <li>
            <h4>Zero loss </h4>
          </li>
          <br></br>
          <li>
            <h4>Real - time simulation</h4>
          </li>
          <br></br>
          <li>
            <h4>Effective risk management </h4>
          </li>
          <br></br>
          <li>
            <h4>Verified stats</h4>
          </li>
        </ul>
        </div>
        <div className="col-6 p-5">
          <img src="./media/virtual_capital.png" style={{ width: "100%" }} />
          
        </div>
      </div>
    </div>
  );
}

export default Stats;
