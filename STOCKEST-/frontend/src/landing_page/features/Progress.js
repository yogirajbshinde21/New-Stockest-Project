import React from 'react';

function Progress() {
    return ( 
        <div className="container ">
        <div className="row">
          <div className="col-6 p-5">
            <img src="./media/tracking.jpg" style={{borderRadius: "150%", width: "100%" }} />
          </div>
          <div className="col-6 p-5 mt-5">
            <h1>PROGRESS TRACKING </h1>
              <h3 style={{color:"blue"}}> FOR USER STATISFIED</h3>
            <p className="mb-5">
            keep a track on what to,
            </p>
            <div className="row">
              <h5>
              Users can track their learning journey, performance history, and trading improvements over time.
              </h5>
              <br></br>
              <p>
              The app provides users with the ability to track their learning journey, allowing them to monitor their progress as they complete educational modules and tutorials. With detailed analytics, users can see how their understanding of stock trading evolves over time. They can also track key metrics, such as portfolio growth, trading activity, and success rates in simulations, helping them measure their performance history and improvements in strategy execution.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  


export default Progress;