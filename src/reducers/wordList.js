const wordList = (state = [], action) => {
  switch (action.type) {
    case "SET_WORD_LIST":
      return {
        count: action.count,
        result: action.result,
      };
    default:
      return state;
  }
};

export default wordList;
