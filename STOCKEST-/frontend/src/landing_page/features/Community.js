import React from 'react';

function Community () {
    return (  
        <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="./media/support.jpg" style={{width:600}} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>COMMUNITY SUPPORT </h1>
            <h3 style={{color:"blue"}}> WITH DISCUSSION FORUMS</h3>
          <br></br>
          <div className="row">
            <h5>
            Spaces for users to share experiences, ask questions, and learn from others.
            </h5>
            <p>
            The app provides dedicated spaces for users to engage in discussions, share experiences, and seek advice from others. These discussion forums and community support channels foster a collaborative learning environment where users can ask questions, exchange trading strategies, and learn from one another’s successes and challenges. Whether it’s a beginner looking for help with understanding stock market terminology or an advanced trader sharing insights on market trends, the forums create a rich ecosystem for peer learning.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}




export default Community ;