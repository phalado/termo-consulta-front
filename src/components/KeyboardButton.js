import React from "react";
import styles from "../styles/Keyboard";
import PropTypes from "prop-types";

const KeyboardButton = (props) => {
  const { letter, color, handleButtonClick, styleSize } = props;

  const handleClick = (event) =>
    handleButtonClick(event.target.innerText.toLowerCase());

  const style =
    color === ""
      ? styles[styleSize].button
      : { ...styles[styleSize].button, backgroundColor: color };

  return (
    <button
      style={style}
      onClick={handleClick}
      key={letter}
      disabled={color === "green"}
    >
      {letter.toUpperCase()}
    </button>
  );
};

KeyboardButton.propTypes = {
  letter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  styleSize: PropTypes.string.isRequired,
};

export default KeyboardButton;
