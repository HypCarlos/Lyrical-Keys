import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="search-container">
        <h1>SEARCH</h1>
      </div>
      <div className="vinyl-container">
        <h2>[VINYL]</h2>
      </div>
      <div className="lyrics-container">
        <div className="lyrics">
          <h3 id="lyrics">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
