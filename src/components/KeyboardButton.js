import React from "react";
import styles from "../styles/Keyboard";

const KeyboardButton = (props) => {
  const { letter, color, handleButtonClick } = props;

  const handleClick = (event) => handleButtonClick(event.target.innerText);
  const style =
    color === "" ? styles.button : { ...styles.button, backgroundColor: color };

  return (
    <button style={style} onClick={handleClick} key={letter} disabled={color === 'green'}>
      {letter}
    </button>
  );
};

export default KeyboardButton;
