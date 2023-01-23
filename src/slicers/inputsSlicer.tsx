import { createSlice } from '@reduxjs/toolkit';
import InputInterface from '../interfaces/InputInterface';

const initialState = {
  l_one: "",
  l_two: "",
  l_three: "",
  l_four: "",
  l_five: "",
}

const inputsSlicer = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    editLetter: (
      state: InputInterface = initialState,
      action: { payload: { id: number, letter: string } }
    ) => ({ ...state, [action.payload.id]: action.payload.letter })
  }
})

export const { editLetter } = inputsSlicer.actions
export default inputsSlicer
