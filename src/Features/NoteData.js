import { createSlice } from '@reduxjs/toolkit'

export const noteData = createSlice({
  name: 'dataArray',
  initialState: {
    value: [ { title: "1st", desc: "1st desc " },
    { title: "2nd", desc: "2nd desc" },
    { title: "3rd", desc: "3rd desc" },
    { title: "4th", desc: "4th desc" },
    { title: "5th", desc: "5th desc" },
  ],
  },
  reducers: {
    getData: (state,action) => {
        state.value += 1
    },
    decrement: (state,action) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { insertData, decrement, incrementByAmount } = noteData.actions

export default noteData.reducer