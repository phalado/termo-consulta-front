const WordsListContainer = {
  normalSize: {
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
    subtitle: {
      margin: "0 0 10px 0",
      textAlign: "center",
    },
    wordsContainer: {
      display: "flex",
      flexFlow: "wrap",
      overflow: "auto",
      height: "90%",
      alignContent: "flex-start",
    },
    words: {
      marginRight: "15px",
      flexGrow: 1,
    },
  },
  smallSize: {
    container: {
      backgroundColor: "white",
      width: "90%",
      height: "100%",
      borderRadius: "10px",
      color: "black",
      padding: "10px",
    },
    title: {
      margin: "0 0 5px 0",
      textAlign: "center",
      fontSize: "1.2em",
    },
    subtitle: {
      margin: "0 0 10px 0",
      textAlign: "center",
      fontSize: "1em",
    },
    wordsContainer: {
      display: "flex",
      flexFlow: "wrap",
      overflow: "auto",
      height: "80%",
      alignContent: "flex-start",
    },
    words: {
      marginRight: "8px",
      flexGrow: 1,
      fontSize: "0.8em",
    },
  },
};

export default WordsListContainer;
