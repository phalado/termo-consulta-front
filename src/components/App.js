import React, { useEffect } from "react";
import LetterInput from "./LetterInput";
import styles from "../styles/App";
import { getWordList } from "../services/api";
import WordsListContainer from "./WordsListContainer";

const App = (props) => {
  const { inputs, wordList, state, editLetter, setWordList } = props;

  useEffect(() => {
    let mounted = true;

    const fetchWordList = async () => {
      const response = await getWordList(state);

      if (mounted && response) setWordList(response);
    };

    fetchWordList();

    return () => (mounted = false);
  }, [state, setWordList]);

  const handleChange = (id, value) => editLetter({ id, letter: value });

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={styles.title}>Termo Solver</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.inputContainer}>
          <LetterInput
            input={inputs.l_one}
            eventHandler={handleChange}
            id="l_one"
          />
          <LetterInput
            input={inputs.l_two}
            eventHandler={handleChange}
            id="l_two"
          />
          <LetterInput
            input={inputs.l_three}
            eventHandler={handleChange}
            id="l_three"
          />
          <LetterInput
            input={inputs.l_four}
            eventHandler={handleChange}
            id="l_four"
          />
          <LetterInput
            input={inputs.l_five}
            eventHandler={handleChange}
            id="l_five"
          />
        </div>
        <div style={styles.wordsContainer}>
          <WordsListContainer wordList={wordList} />
        </div>
      </main>
    </div>
  );
};

export default App;
