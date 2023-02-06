import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import "./startpage.css";

import Footer from "../../components/footer/Footer";

const Startpage = () => {
  return (
    <div className="App">
      <div className="startpage-container">
        <div className="text-container">
          <h1 style={{ color: "white", fontSize: "80px" }}>Lyrical Keys</h1>
        </div>
        <Link to="/home">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </button>
        </Link>
        <div className="model-container">
          <Spline
            id="spline"
            scene="https://prod.spline.design/XNRAeE-tmf1WktyM/scene.splinecode"
          />
        </div>
      </div>
      {/* <div className="footer-container">
        <Footer />
      </div> */}
    </div>
  );
};

export default Startpage;
