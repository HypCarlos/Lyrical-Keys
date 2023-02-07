import React, { useState, useEffect } from "react";
import randomWords from "random-words";
import "./homepage.css";

const NUMB_OF_WORDS = 200;
const SECONDS = 60;

const Homepage = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords());
  }

  return (
    <div className="homepage-container">
      <div className="search-container">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="vinyl-container">
        <h2>[VINYL]</h2>
      </div>
      <div className="lyrics-container">
        {words.map((word, i) => (
          <>
            <h3 id="lyrics">{word}</h3>
            <span> </span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
