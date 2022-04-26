import React from "react";
import { getButtonType } from "../helpers/helpers";
import styles from "../styles/Keyboard";
import KeyboardButton from "./KeyboardButton";
import PropTypes from "prop-types";

const KeyboardLine = (props) => {
  const { handleButtonClick, state, styleSize } = props;

  const renderButton = (letter) => (
    <KeyboardButton
      handleButtonClick={handleButtonClick}
      letter={letter}
      color={getButtonType(letter, state)}
      key={letter}
      styleSize={styleSize}
    />
  );

  return (
    <div>
      <div style={styles[styleSize].topLineContainer}>
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((letter) =>
          renderButton(letter)
        )}
      </div>
      <div style={styles[styleSize].midLineContainer}>
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((letter) =>
          renderButton(letter)
        )}
      </div>
      <div style={styles[styleSize].botLineContainer}>
        {["z", "x", "c", "v", "b", "n", "m"].map((letter) =>
          renderButton(letter)
        )}
      </div>
    </div>
  );
};

KeyboardLine.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  state: PropTypes.shape({
    inputs: PropTypes.objectOf(PropTypes.string),
    searchArray: PropTypes.arrayOf(PropTypes.string),
    removeArray: PropTypes.arrayOf(PropTypes.string),
    wordList: PropTypes.shape({
      count: PropTypes.number,
      result: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  styleSize: PropTypes.string.isRequired,
};

export default KeyboardLine;
