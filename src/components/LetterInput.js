import React from "react";
import styles from "../styles/LetterInput";
import PropTypes from "prop-types";

const LetterInput = (props) => {
  const { input, eventHandler, id, styleSize } = props;

  const handleChange = (event) =>
    eventHandler(event.target.id, event.target.value.toLowerCase());

  return (
    <input
      style={styles[styleSize].input}
      type="text"
      maxLength={1}
      id={id}
      value={input.toUpperCase()}
      onChange={handleChange}
    />
  );
};

LetterInput.propTypes = {
  input: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  styleSize: PropTypes.string.isRequired,
};

export default LetterInput;
