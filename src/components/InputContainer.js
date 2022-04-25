import React from "react";
import styles from "../styles/App";
import LetterInput from "./LetterInput";

const InputContainer = (props) => {
  const { inputs, handleChange } = props;
  const { l_one, l_two, l_three, l_four, l_five } = inputs;

  return (
    <div style={styles.inputContainer}>
      <LetterInput input={l_one} eventHandler={handleChange} id="l_one" />
      <LetterInput input={l_two} eventHandler={handleChange} id="l_two" />
      <LetterInput input={l_three} eventHandler={handleChange} id="l_three" />
      <LetterInput input={l_four} eventHandler={handleChange} id="l_four" />
      <LetterInput input={l_five} eventHandler={handleChange} id="l_five" />
    </div>
  );
};

export default InputContainer;
