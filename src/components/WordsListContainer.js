import React from "react";
import styles from "../styles/WordsListContainer";

const WordsListContainer = (props) => {
  const { wordList } = props;
  const { count, result } = wordList;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de possíveis respostas</h1>
      <h2 style={styles.title}>Contagem: {count}</h2>
      <div style={styles.wordsContainer}>
        {result.map((word) => {
          return (
            <p style={styles.words} key={word}>
              {word}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default WordsListContainer;
