import React from 'react';

function Leaderboard () {
    return ( 
            <div className="container p-3">
              <div className="row p-5">
                <div className="col-6 p-5">
                  <h1 style={{color:"#1E4D8A"}}> LEADERBOARD </h1>
                  <h2 className="text-success"> AND</h2>
                  <h1 style={{color:"#D93025"}}>COMPETITIONS  </h1>
                  <br></br>
                <h5 className="text-primary mb-4">
                  Learn stock trading through fun competitions and earn rewards while competing with your community!
                </h5>
                <div className="features-list mb-4">
                  <div className="feature-item mb-3">
                    <h6 className="text-success">🏆 Community Rankings</h6>
                    <p>Compete with traders from your village and nearby areas. See who makes the smartest trading decisions!</p>
                  </div>
                  <div className="feature-item mb-3">
                    <h6 className="text-success">🎯 Practice Challenges</h6>
                    <p>Start with simple trading tasks and progress to advanced challenges as you learn. Perfect for beginners!</p>
                  </div>
                  <div className="feature-item mb-3">
                    <h6 className="text-success">🌟 Earn Recognition</h6>
                    <p>Get special badges and rewards for consistent performance. Show off your trading skills to your community!</p>
                  </div>
                </div>
                <div className="language-support mt-3">
                  <p className="text-muted"><small>* Available in Hindi, Tamil, Telugu, and other regional languages</small></p>
                </div>
                </div>
                <div className="col-6 p-5 d-flex align-items-center">
                  <img src="./media/leaderboard.png" style={{ width: "100%", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} alt="Leaderboard Preview" className="rounded" />
                </div>
              </div>
            </div>
          );
        }

export default Leaderboard;