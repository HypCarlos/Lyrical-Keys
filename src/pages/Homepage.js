import React from "react";
import Spline from "@splinetool/react-spline";

const Homepage = () => {
  return (
    <div>
      <h1 style={{ color: "white", fontSize: "100px" }}>Lyrical Keys</h1>
      <Spline
        id="spline"
        scene="https://prod.spline.design/XNRAeE-tmf1WktyM/scene.splinecode"
      />
    </div>
  );
};

export default Homepage;
