import React from 'react';

function Simulation() {
    return ( 
            <div className="container p-3">
              <div className="row p-5">
                <div className="col-6 p-5">
                  <h2>STOCK </h2>
                  <h1 style={{color:"blue"}}> MARKET</h1>
                  <h1 style={{color:"red"}}>SIMULATION  </h1>
                  <br></br>

                  <h5>
                  Real-time stock price simulation with virtual portfolios, allowing users to practice and understand market trends.
                  </h5>
                  <br></br>
                  <p>
                  Users can build virtual portfolios with the fake currency provided, making decisions to buy, sell, or hold stocks based on real-world trends and news. This simulation allows users to practice stock market strategies, understand the impact of market trends, and gain confidence in their trading skills without the fear of losing real money.
                  </p>


                
                </div>
                <div className="col-6 p-5">
                  <img src="./media/simulation2.jpeg" style={{ width: "100%" }} />
                  
                </div>
              </div>
            </div>
          );
        }
        
        

export default Simulation;