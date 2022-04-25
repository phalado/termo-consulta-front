const searchArray = (state = [], action) => {
  switch (action.type) {
    case "ADD_LETTER_TO_SEARCH":
      return [...state, action.letter];
    case "REMOVE_LETTER_FROM_SEARCH":
      return [...state.filter((value) => value !== action.letter)];
    default:
      return state;
  }
};

export default searchArray;
