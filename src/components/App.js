import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "../styles/App";
import { getWordList } from "../services/api";
import WordsListContainer from "./WordsListContainer";
import InputContainer from "./InputContainer";
import KeyboardLine from "./KeyboardLine";
import PropTypes from "prop-types";
import HowToModal from "./HowToModal";
import RemovedWordsList from "./RemovedWordsList";

const App = (props) => {
  const {
    state,
    editLetter,
    setWordList,
    addLetterToSearch,
    removeLetterFromSearch,
    addLetterToRemove,
    removeLetterFromRemove,
    removeWord,
    removeNewWord
  } = props;
  const { inputs, searchArray, removeArray, removedWords, wordList } = state;

  useEffect(() => {
    let mounted = true;

    const fetchWordList = async () => {
      const response = await getWordList({ inputs, searchArray, removeArray });

      if (mounted && response) setWordList(response, removedWords);
    };

    fetchWordList();

    return () => (mounted = false);
  }, [inputs, setWordList, searchArray, removeArray, removedWords]);

  const [styleSize, setStyleSize] = useState("normalSize");
  const [modalOpen, setModalOpen] = useState(false);

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

  const addNewRemovedWord = (word) => {
    removeWord(word)
    removeNewWord(word)
  }

  const questionIcon = () => {
    return (
      <div style={styles.questionIcon}>
        <img
          style={styles.questionIconImage}
          src={"./contents/images/questionIcon.png"}
          alt="Close icon"
          onClick={() => setModalOpen(true)}
          title="Como usar o termo solver"
        />
      </div>
    );
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
          <RemovedWordsList removedWords={removedWords} styleSize={styleSize} />
        </div>
        <div style={styles[styleSize].rightWing}>
          <WordsListContainer
            wordList={wordList}
            styleSize={styleSize}
            addNewRemovedWord={addNewRemovedWord}
          />
        </div>
      </main>
      <HowToModal
        styleSize={styleSize}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {questionIcon()}
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
