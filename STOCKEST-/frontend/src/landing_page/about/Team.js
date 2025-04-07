import React from "react";

function Team() {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-mid-3 text-center p-5">
        <h1>Meet The Amazing Team</h1>
      </div>
    
      <div className="col-md-3 text-center">
        <img
          src="./media/nithinKamath (1).jpg"
          style={{ borderRadius: "50%", width: "50%" }}
          alt="Nikhil Pawar"
        />
        <h4 className="mt-3">Nikhil Pawar</h4>
        <h6>Team Member 1</h6>
      </div>
  
      
      <div className="col-md-3 text-center">
        <img
          src="./media/nithinKamath (1).jpg"
          style={{ borderRadius: "50%", width: "50%" }}
          alt="Member 2"
        />
        <h4 className="mt-3">Yogiraj Shinde</h4>
        <h6>Team Member 2</h6>
      </div>
  
      
      <div className="col-md-3 text-center">
        <img
          src="./media/nithinKamath (1).jpg"
          style={{ borderRadius: "50%", width: "50%" }}
          alt="Member 3"
        />
        <h4 className="mt-3">Ayyan Gharade</h4>
        <h6>Team Member 3</h6>
      </div>
  
      
      <div className="col-md-3 text-center">
        <img
          src="./media/nithinKamath (1).jpg"
          style={{ borderRadius: "50%", width: "50%" }}
          alt="Member 4"
        />
        <h4 className="mt-3">Rahul Jadhav</h4>
        <h6>Team Member 4</h6>
      </div>
    </div>
  </div>
  
  );
}

export default Team;
