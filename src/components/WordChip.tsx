import React from "react";
import styles from "../styles/WordChip";

const WordChip = (
  { word, addNewRemovedWord }:
  { word: string, addNewRemovedWord: (word: string) => void }
) => (
  <div style={styles.container} onClick={() => addNewRemovedWord(word)}>
    {word}
  </div>
);

export default WordChip;
