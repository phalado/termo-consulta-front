const inputs = (state = [], action) => {
  switch (action.type) {
    case "EDIT_LETTER":
      return {
        ...state,
        [action.id]: action.letter,
      };
    default:
      return state;
  }
};

export default inputs;
