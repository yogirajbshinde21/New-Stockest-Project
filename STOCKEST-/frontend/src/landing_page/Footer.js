import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="./media/stockestlogo2.jpg" style={{ width: "50%" }} />
            
          </div>
          <div className="col">
            <p>Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/product">Features</a>
            <br />
            <a href="/blog">Blogs</a>
            <br />
            
          </div>
          <div className="col">
            <p>Support</p>
            <a href="/support">Contact</a>
            <br />
            <a href="/support">Support portal</a>
            <br />
            
          </div>
          <div className="col">
            <p>Account</p>
            <a href="/signup">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
