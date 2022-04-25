import React, { useEffect } from "react";
import styles from "../styles/App";
import { getWordList } from "../services/api";
import WordsListContainer from "./WordsListContainer";
import InputContainer from "./InputContainer";
import KeyboardLine from "./KeyboardLine";

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
        <h1 style={styles.title}>Termo Solver</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.leftWing}>
          <InputContainer inputs={inputs} handleChange={handleChange} />
          <KeyboardLine
            handleButtonClick={handleButtonClick}
            state={state}
          />
        </div>
        <div style={styles.rightWing}>
          <WordsListContainer wordList={wordList} />
        </div>
      </main>
    </div>
  );
};

export default App;
