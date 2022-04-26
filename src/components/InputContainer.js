import React from "react";
import styles from "../styles/App";
import LetterInput from "./LetterInput";
import PropTypes from "prop-types";

const InputContainer = (props) => {
  const { inputs, handleChange, styleSize } = props;
  const { l_one, l_two, l_three, l_four, l_five } = inputs;

  return (
    <div style={styles.inputContainer}>
      <LetterInput input={l_one} eventHandler={handleChange} id="l_one" styleSize={styleSize} />
      <LetterInput input={l_two} eventHandler={handleChange} id="l_two" styleSize={styleSize} />
      <LetterInput input={l_three} eventHandler={handleChange} id="l_three" styleSize={styleSize} />
      <LetterInput input={l_four} eventHandler={handleChange} id="l_four" styleSize={styleSize} />
      <LetterInput input={l_five} eventHandler={handleChange} id="l_five" styleSize={styleSize} />
    </div>
  );
};

InputContainer.propTypes = {
  inputs: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  styleSize: PropTypes.string.isRequired
};

export default InputContainer;
