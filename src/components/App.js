import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "../styles/App";
import { getWordList } from "../services/api";
import WordsListContainer from "./WordsListContainer";
import InputContainer from "./InputContainer";
import KeyboardLine from "./KeyboardLine";
import PropTypes from "prop-types";

const App = (props) => {
  const {
    state,
    editLetter,
    setWordList,
    addLetterToSearch,
    removeLetterFromSearch,
    addLetterToRemove,
    removeLetterFromRemove,
  } = props;
  const { inputs, searchArray, removeArray, wordList } = state;

  useEffect(() => {
    let mounted = true;

    const fetchWordList = async () => {
      const response = await getWordList({ inputs, searchArray, removeArray });

      if (mounted && response) setWordList(response);
    };

    fetchWordList();

    return () => (mounted = false);
  }, [inputs, setWordList, searchArray, removeArray]);

  const [styleSize, setStyleSize] = useState("normalSize");

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 900) setStyleSize("normalSize");
      else setStyleSize("smallSize");
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  const handleChange = (id, value) => editLetter({ id, letter: value });
  const handleButtonClick = (value) => {
    if (removeArray.includes(value)) removeLetterFromRemove(value);
    else if (searchArray.includes(value)) {
      removeLetterFromSearch(value);
      addLetterToRemove(value);
    } else addLetterToSearch(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={styles[styleSize].title}>Termo Solver</h1>
        <h2 style={styles[styleSize].subTitle}>
          by{" "}
          <a
            style={styles.link}
            href="https://www.phalado.tech/"
            target="_blank"
            rel="noreferrer"
          >
            Phalado
          </a>
        </h2>
      </header>
      <main style={styles[styleSize].main}>
        <div style={styles[styleSize].leftWing}>
          <InputContainer
            inputs={inputs}
            handleChange={handleChange}
            styleSize={styleSize}
          />
          <KeyboardLine
            handleButtonClick={handleButtonClick}
            state={state}
            styleSize={styleSize}
          />
        </div>
        <div style={styles[styleSize].rightWing}>
          <WordsListContainer wordList={wordList} styleSize={styleSize} />
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  state: PropTypes.shape({
    inputs: PropTypes.objectOf(PropTypes.string),
    searchArray: PropTypes.arrayOf(PropTypes.string),
    removeArray: PropTypes.arrayOf(PropTypes.string),
    wordList: PropTypes.shape({
      count: PropTypes.number,
      result: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  editLetter: PropTypes.func.isRequired,
  setWordList: PropTypes.func.isRequired,
  addLetterToSearch: PropTypes.func.isRequired,
  removeLetterFromSearch: PropTypes.func.isRequired,
  addLetterToRemove: PropTypes.func.isRequired,
  removeLetterFromRemove: PropTypes.func.isRequired,
};

export default App;
