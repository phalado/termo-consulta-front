import React from "react";
import { getButtonType } from "../helpers/helpers";
import styles from "../styles/Keyboard";
import KeyboardButton from "./KeyboardButton";

const KeyboardLine = (props) => {
  const { handleButtonClick, state } = props;

  const renderButton = (letter) => (
    <KeyboardButton
      handleButtonClick={handleButtonClick}
      letter={letter}
      color={getButtonType(letter, state)}
      key={letter}
    />
  );

  return (
    <div>
      <div style={styles.topLineContainer}>
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((letter) =>
          renderButton(letter)
        )}
      </div>
      <div style={styles.midLineContainer}>
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((letter) =>
          renderButton(letter)
        )}
      </div>
      <div style={styles.botLineContainer}>
        {["z", "x", "c", "v", "b", "n", "m"].map((letter) =>
          renderButton(letter)
        )}
      </div>
    </div>
  );
};

export default KeyboardLine;
