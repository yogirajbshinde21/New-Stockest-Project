import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ta,te,kn,ml,gu,pa,bn,mr,or,as,ur",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <style>
        {`
          .goog-te-gadget img,
          .goog-te-gadget span {
            display: none !important;
          }

          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }

          /* Hide the Google Translate popup */
          .VIpgJd-ZVi9od-l4eHX-hSRGPd,
          .VIpgJd-ZVi9od-ORHb-OEVmcd {
            display: none !important;
          }

          /* Additional backup selectors to ensure popup is hidden */
          .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
            display: none !important;
          }

          .VIpgJd-ZVi9od-aZ2wEe-OiiCO {
            display: none !important;
          }

          body {
            top: 0px !important;
          }

          .language-dropdown {
            position: absolute;
            top: 50px;
            right: 10px;
            background: #007bff;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: ${showDropdown ? "block" : "none"};
            z-index: 1000;
            text-align: center;
            color: white;
            font-weight: bold;
            cursor: pointer;
          }

          .language-dropdown:hover {
            background: #0056b3;
          }

          .language-icon {
            cursor: pointer;
            font-size: 20px;
            color: #333;
          }

          .language-icon:hover {
            color: #007bff;
          }

          .powered-by {
            font-size: 12px;
            color: #fff;
            margin-top: 5px;
            font-weight: bold;
          }
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg border-bottom fixed-top"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container-fluid">
          <a href="/">
            <img
              src="./media/stockestlogo2.jpg"
              style={{ width: "75%" }}
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/support">
                  Support
                </a>
              </li>
              <li className="nav-item">
  <a className="nav-link active" href="/chatbot">
    AI Assistant
  </a>
</li>
            </ul>

            <div
              className="language-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Globe size={24} />
            </div>

            <div className="language-dropdown">
              <div id="google_translate_element"></div>
              <p className="powered-by">STOCKEST</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;