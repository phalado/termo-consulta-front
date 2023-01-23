import { createSlice } from '@reduxjs/toolkit';
import WordListInterface from '../interfaces/WordListInterface';

const initialState: WordListInterface = {
  count: 0,
  result: [],
}

const wordListSlicer = createSlice({
  name: 'wordList',
  initialState,
  reducers: {
    setWordList: (_state, action: { payload: any }) => {
      const { count, removedWords, result } = action.payload

      return ({
        count,
        result: result.filter((value: string) => !removedWords.includes(value))
      })
    },
    removeWord: (
      state: WordListInterface = initialState,
      action: { payload: string }
    ) => ({
      count: state.count - 1,
      result: [...state.result.filter((value) => value !== action.payload)]
    })
  }
})

export const { setWordList, removeWord } = wordListSlicer.actions
export default wordListSlicer
