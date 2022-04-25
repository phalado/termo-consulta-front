import { connect } from "react-redux";
import { addLetterToRemove, addLetterToSearch, editLetter, removeLetterFromRemove, removeLetterFromSearch, setWordList } from "../actions";
import App from "../components/App";

const mapStateToProps = (state) => ({
  state,
  wordList: state.wordList,
});

const mapDispatchToProps = (dispatch) => ({
  editLetter: (data) => dispatch(editLetter(data)),
  setWordList: (data) => dispatch(setWordList(data)),
  addLetterToSearch: letter => dispatch(addLetterToSearch(letter)),
  removeLetterFromSearch: letter => dispatch(removeLetterFromSearch(letter)),
  addLetterToRemove: letter => dispatch(addLetterToRemove(letter)),
  removeLetterFromRemove: letter => dispatch(removeLetterFromRemove(letter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
