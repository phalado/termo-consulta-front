import React, { useEffect, useLayoutEffect, useState } from "react";
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

  const [mainStyle, setMainStyle] = useState(styles.main);
  const [leftWingStyle, setLeftWingStyle] = useState(styles.leftWing);
  const [rightWingStyle, setRightWingStyle] = useState(styles.rightWing);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 900) {
        setMainStyle(styles.main);
        setLeftWingStyle(styles.leftWing);
        setRightWingStyle(styles.rightWing);
      } else {
        setMainStyle(styles.mainSmall);
        setLeftWingStyle(styles.leftWingSmall);
        setRightWingStyle(styles.rightWingSmall);
      }
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
        <h1 style={styles.title}>Termo Solver</h1>
        <h2 style={styles.subTitle}>
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
      <main style={mainStyle}>
        <div style={leftWingStyle}>
          <InputContainer inputs={inputs} handleChange={handleChange} />
          <KeyboardLine handleButtonClick={handleButtonClick} state={state} />
        </div>
        <div style={rightWingStyle}>
          <WordsListContainer wordList={wordList} />
        </div>
      </main>
    </div>
  );
};

export default App;
