import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = []

const removeArraySlicer = createSlice({
  name: 'removeArray',
  initialState,
  reducers: {
    addLetterToRemove: (
      state: string[] = [],
      action: { payload: string }
    ) => [...state, action.payload],
    removeLetterFromRemove: (
      state: string[] = [],
      action: { payload: string }
    )=> [...state.filter((value) => value !== action.payload)]
  }
})

export const { addLetterToRemove, removeLetterFromRemove } = removeArraySlicer.actions
export default removeArraySlicer
