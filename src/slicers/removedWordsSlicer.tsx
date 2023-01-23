import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = []

const removedWords = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    removeNewWord: (
      state: string[] = initialState,
      action: { payload: string }
    ) => [...state, action.payload]
  }
})

export const { removeNewWord } = removedWords.actions
export default removedWords
