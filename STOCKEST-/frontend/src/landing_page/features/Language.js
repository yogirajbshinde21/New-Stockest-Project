import React from 'react';

function Language() {
    return ( 
        <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="./media/language2.jpg" style={{width:650}} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>REGIONAL LANGUAGE SUPPORT </h1>
            <h3 style={{color:"blue"}}> FOR BEGINNER USERS</h3>
          <br></br>
          <div className="row">
            <h5>
         Full app functionality, including tutorials and stock information, available in multiple regional languages to eliminate language barriers.
         </h5>
         <p>
         Offering full app functionality in multiple regional languages ensures inclusivity and accessibility for users from diverse linguistic backgrounds. By providing tutorials, stock information, and trading tools in native languages, the platform removes language barriers, enabling users to engage more confidently with financial markets. This feature is particularly crucial in regions where a significant portion of the population may not be fluent in the app's primary language.
         </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}


export default Language;