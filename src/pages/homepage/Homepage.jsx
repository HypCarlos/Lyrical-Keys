import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="search-container">
        <div className="search-border">
          <h3 id="search">SEARCH</h3>
        </div>
      </div>
      <div className="vinyl-container">
        <h2>[VINYL]</h2>
      </div>
      <div className="lyrics-container">
        <h3 id="lyrics">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </h3>
      </div>
    </div>
  );
};

export default Homepage;
