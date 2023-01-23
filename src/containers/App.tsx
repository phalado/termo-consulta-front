import { connect } from "react-redux";
import App from "../components/App";
import WordListInterface from "../interfaces/WordListInterface";

import { editLetter } from "../slicers/inputsSlicer";
import { addLetterToRemove, removeLetterFromRemove } from "../slicers/removeArraySlicer";
import { removeNewWord } from "../slicers/removedWordsSlicer";
import { addLetterToSearch, removeLetterFromSearch } from "../slicers/searchArraySlicer";
import { removeWord, setWordList } from "../slicers/wordListSlicer";

const mapStateToProps = (state: any) => ({
  state,
  wordList: state.wordList,
});

const mapDispatchToProps = (dispatch: any) => ({
  editLetter: (data: { id: number, letter: string }) => dispatch(editLetter(data)),
  setWordList: (data: WordListInterface, removedWords: string[]) => dispatch(setWordList({ ...data, removedWords })),
  addLetterToSearch: (letter: string) => dispatch(addLetterToSearch(letter)),
  removeLetterFromSearch: (letter: string) => dispatch(removeLetterFromSearch(letter)),
  addLetterToRemove: (letter: string) => dispatch(addLetterToRemove(letter)),
  removeLetterFromRemove: (letter: string) => dispatch(removeLetterFromRemove(letter)),
  removeWord: (letter: string) => dispatch(removeWord(letter)),
  removeNewWord: (word: string) => dispatch(removeNewWord(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
