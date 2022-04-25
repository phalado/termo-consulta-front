const editLetter = (data) => ({
  type: "EDIT_LETTER",
  id: data.id,
  letter: data.letter,
});

const setWordList = (data) => ({
  type: "SET_WORD_LIST",
  count: data.count,
  result: data.result,
});

const addLetterToSearch = (letter) => ({
  type: "ADD_LETTER_TO_SEARCH",
  letter: letter,
});

const removeLetterFromSearch = (letter) => ({
  type: "REMOVE_LETTER_FROM_SEARCH",
  letter: letter,
});

const addLetterToRemove = (letter) => ({
  type: "ADD_LETTER_TO_REMOVE",
  letter: letter,
});

const removeLetterFromRemove = (letter) => ({
  type: "REMOVE_LETTER_FROM_REMOVE",
  letter: letter,
});

export {
  editLetter,
  setWordList,
  addLetterToSearch,
  removeLetterFromSearch,
  addLetterToRemove,
  removeLetterFromRemove,
};
