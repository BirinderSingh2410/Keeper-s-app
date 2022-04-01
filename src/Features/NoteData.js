import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    value: [],
    editKey: false,
    editId: 0,
  },
  reducers: {
    getNotes: (state, action) => {
      state.value = action.payload;
    },
    insertNote: (state, action) => {
        state.value.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.value = state.value.filter((i) => {
        return i.id !== action.payload;
      });
    },
    editClick: (state, action) => {
      state.editKey = !state.editKey;
      state.editId = action.payload;
    },
    editNote: (state, action) => {
      state.value = state.value.filter((i,index) => {
        if (i.id === action.payload.index) {
          state.value[state.editId].title = action.payload.title;
          state.value[state.editId].description = action.payload.description;
          state.value[state.editId].color = action.payload.color;
        }
        return state.value[index];
      });
    },
  },
});

export const { insertNote, deleteNote, editClick, editNote, getNotes } =
  noteSlice.actions;
export default noteSlice.reducer;
