import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = []

const searchArraySlicer = createSlice({
  name: 'searchArray',
  initialState,
  reducers: {
    addLetterToSearch: (
      state: string[] = [],
      action: { payload: string }
    ) => [...state, action.payload],
    removeLetterFromSearch: (
      state: string[] = [],
      action: { payload: string }
    )=> [...state.filter((value) => value !== action.payload)]
  }
})

export const { addLetterToSearch, removeLetterFromSearch } = searchArraySlicer.actions
export default searchArraySlicer
