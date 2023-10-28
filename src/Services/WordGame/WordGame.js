import React from "react";
import ScriptTag from "react-script-tag";
const Demo = (props) => (
  <ScriptTag type="text/javascript" src="/path/to/script.js" />
);

function WordGame() {
  return (
    <div>
      <div className="main">
        <h1>Word Game</h1>
        <div class="content">
          <p class="word"></p>
          <div class="details">
            <p class="hint">
              Hint: <span></span>
            </p>
            <p class="time">
              Time Left:{" "}
              <span>
                <b>30</b>s
              </span>
            </p>
          </div>
          <input
            type="text"
            spellcheck="false"
            placeholder="Enter a valid word"
          />
          <div class="buttons">
            <button class="refresh-word">Refresh Word</button>
            <button class="check-word">Check Word</button>
          </div>
        </div>
      </div>
      <script src="/path/to/words.js" type="text/javascript" />
    </div>
  );
}

export default WordGame;
