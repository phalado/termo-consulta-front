const WordsListContainer = {
  container: {
    backgroundColor: "white",
    width: "90%",
    height: "90%",
    borderRadius: "10px",
    color: "black",
    padding: "10px",
  },
  title: {
    margin: "0 0 10px 0",
    textAlign: "center",
  },
  wordsContainer: {
    display: "flex",
    flexFlow: "wrap",
    overflow: "scroll",
    height: "90%",
  },
  words: {
    marginRight: "15px",
    flexGrow: 1,
  },
};

export default WordsListContainer;
