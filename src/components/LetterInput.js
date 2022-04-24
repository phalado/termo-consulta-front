import React from "react";
import styles from "../styles/LetterInput";

const LetterInput = (props) => {
  const { input, eventHandler, id } = props;

  const handleChange = (event) =>
    eventHandler(event.target.id, event.target.value.toLowerCase());

  return (
    <input
      style={styles.input}
      type="text"
      maxLength={1}
      id={id}
      value={input.toUpperCase()}
      onChange={handleChange}
    />
  );
};

export default LetterInput;
