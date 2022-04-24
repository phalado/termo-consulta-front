import { connect } from "react-redux";
import { editLetter, setWordList } from "../actions";
import App from "../components/App";

const mapStateToProps = (state) => ({
  state,
  wordList: state.wordList,
  inputs: state.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  editLetter: (data) => dispatch(editLetter(data)),
  setWordList: (data) => dispatch(setWordList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
