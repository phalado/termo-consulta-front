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

export { editLetter, setWordList };
