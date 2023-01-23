import React from "react";
import styles from "../styles/WordsListContainer";

const RemovedWordsList = (
  { removedWords, styleSize }:
  { removedWords: string[], styleSize: "normalSize" | "smallSize" }
) => (
  <div style={styles[styleSize].removedWordsContainer}>
    <h1 style={styles[styleSize].title}>Lista de palavras excluídas</h1>
    <h2 style={styles[styleSize].subtitle}>Contagem: {removedWords.length}</h2>
    <div style={styles[styleSize].wordsContainer}>
      {removedWords.map((word) => <div style={styles[styleSize].words}>{word}</div>)}
    </div>
  </div>
);

export default RemovedWordsList;
