const removeArray = (state = [], action) => {
  switch (action.type) {
    case "ADD_LETTER_TO_REMOVE":
      return [...state, action.letter];
    case "REMOVE_LETTER_FROM_REMOVE":
      return [...state.filter((value) => value !== action.letter)];
    default:
      return state;
  }
};

export default removeArray;
