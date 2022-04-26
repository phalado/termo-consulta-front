import React from "react";
import styles from "../styles/WordsListContainer";
import PropTypes from "prop-types";

const WordsListContainer = (props) => {
  const { wordList, styleSize } = props;
  const { count, result } = wordList;

  return (
    <div style={styles[styleSize].container}>
      <h1 style={styles[styleSize].title}>Lista de possíveis respostas</h1>
      <h2 style={styles[styleSize].subtitle}>Contagem: {count}</h2>
      <div style={styles[styleSize].wordsContainer}>
        {result.map((word) => {
          return (
            <p style={styles[styleSize].words} key={word}>
              {word}
            </p>
          );
        })}
      </div>
    </div>
  );
};

WordsListContainer.propTypes = {
  wordList: PropTypes.shape({
    count: PropTypes.number,
    result: PropTypes.arrayOf(PropTypes.string),
    styleSize: PropTypes.string.isRequired,
  }),
};

export default WordsListContainer;
