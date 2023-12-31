import React, { useState, useEffect } from "react";
import WordBinder from "./WordBinder";
import SearchIcon from "@material-ui/icons/Search";
import "./Dictionary.css";

export default function App() {
  const [inputWord, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const RandWordApi =
    "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=mhvfzxrhb41uag20wv1ycfl20yxq6f5zabdt82eutc2wuf1qf";
  const [randWord, setRandDay] = useState("run");

  async function fetchRandWord() {
    const res = await fetch(RandWordApi);
    res
      .json()
      .then((res) => {
        setRandDay(res[0].word);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchRandWord();
  }, []);
  return (
    <div className="App">
      <h2 className="display-3">Dictionary</h2>
      <div className="word-day">
        <h2>Word of The Day : </h2>
        <WordBinder searchedWord={randWord} limit="5" />
      </div>
      <label className="sub-container input-style">
        <div className="container">
          <input
            placeholder="Enter any word to search"
            onChange={(e) => setWord(e.target.value)}
            type="text"
          />
          <button onClick={(e) => setSearchWord(inputWord)}>
            <SearchIcon />
          </button>
        </div>
      </label>
      <WordBinder searchedWord={searchWord} limit="10" />
    </div>
  );
}
