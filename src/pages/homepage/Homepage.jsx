import React, { useState, useEffect, useRef } from "react";
import randomWords from "random-words";
import "./homepage.css";
import ALBUM from "../../assets/album.jpeg";

const NUMB_OF_WORDS = 100;
const SECONDS = 60;

const Homepage = () => {
  const [words, setWords] = useState([]); // SETS THE WORDS (LYRICS) AS AN ARRAY
  const [countdown, setCountdown] = useState(SECONDS); // COUNTDOWN FORM 60 -> 0
  const [currentInput, setCurrentInput] = useState(""); // KEEPS TRACK OF THE USER INPUT
  const [currWordIndex, setCurrentWordIndex] = useState(0); // KEEPS TRACK OF CURRENT INDEX OF WORD
  const [currCharIndex, setCurrentCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  const [correct, setCorrect] = useState(0); // KEEPS TRACK OF CORRECT ENTRYS THAT MATCH
  const [incorrect, setIncorrect] = useState(0); // KEEPS TRACK OF INCORRECT ENTRIES
  const [status, setStatus] = useState("idle"); // STATE OF GAME (IDLE, ENABLED, COMPLETE)

  const textInput = useRef(null);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  // TO FOCUSE ON INPUT ONCE THE USER CLICKS ON PLAY BUTTON
  useEffect(() => {
    if (status == "enabled") {
      textInput.current.focus();
    }
  }, [status]);

  function generateWords() {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords());
  }

  function start() {
    if (status == "finished") {
      setWords(generateWords());
      setCurrentWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setCurrentCharIndex(-1);
      setCurrentChar("");
    }
    if (status != "enabled") {
      setStatus("enabled");
      // 60 SECOND COUNTDOWN
      let interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown == 0) {
            clearInterval(interval);
            setStatus("completed");
            setCurrentInput("");
            return SECONDS;
          }
          return prevCountdown - 1;
        });
      }, 1000); //mili
    }
  }

  function handleKeyDown({ keyCode, key }) {
    // EVERYTIME THE SPACE BAR (32) IS ENTERED IT CHECKS WHETHER THE INPUT IS THE SAME AS THE LYRICS CURRENT WORD
    if (keyCode == 32) {
      checkMatch();
      // CLEARS THE INPUT ONCE THE SPACE BAR IS ENTERED
      setCurrentInput("");
      setCurrentWordIndex(currWordIndex + 1);
      setCurrentCharIndex(-1);
      // BACKSPACE
    } else if (keyCode == 8) {
      setCurrentCharIndex(currCharIndex - 1);
      setCurrentChar("");
    } else {
      setCurrentCharIndex(currCharIndex + 1);
      setCurrentChar(key);
    }
  }

  // COMPARES LYRICS TO THE USER INPUT
  function checkMatch() {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare == currentInput.trim();
    console.log({ doesItMatch });

    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  function getCharClass(wordIdx, charIdx, char) {
    if (
      wordIdx == currWordIndex &&
      charIdx == currCharIndex &&
      currentChar &&
      status != "completed"
    ) {
      // IF CHAR IN INPUT MATCHES LYRICS CHAR
      if (char == currentChar) {
        return "lyrics-match";
      } else {
        return "lyrics-nonmatch";
      }
    } else if (
      wordIdx == currWordIndex &&
      currCharIndex > words[currWordIndex].length
    ) {
      return "lyrics-nonmatch";
    } else {
      return "";
    }
  }

  return (
    <div className="homepage-container">
      <div className="search-container">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="vinyl-container">
        {/* <h2>[VINYL]</h2> */}
        <img style={{ height: "300px", borderRadius: "20px" }} src={ALBUM} />
      </div>
      <div className="input">
        <div className="start-button">
          <button id="button" onClick={start}>
            <svg
              style={{ height: "40px", padding: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </button>
        </div>
        <input
          disabled={status != "enabled"}
          ref={textInput}
          style={{ borderRadius: "5px", height: "20px", textAlign: "center" }}
          type="text"
          onKeyDown={handleKeyDown}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        ></input>
      </div>
      <div className="timer">
        <h1>{countdown}</h1>
      </div>
      {status == "enabled" && (
        <div className="lyrics-container">
          <div className="words">
            {words.map((word, i) => (
              <span key={i}>
                <span>
                  {word.split("").map((char, idx) => (
                    <span
                      className={getCharClass(i, idx, char)}
                      id="lyrics"
                      key={idx}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span> </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {status == "completed" && (
        <div className="results-container">
          <div className="wpm-container">
            <h2>WPM: {correct}</h2>
          </div>
          <div className="accuracy-container">
            <h2>
              ACCURACY: {Math.round(correct / (correct + incorrect)) * 100} %
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
