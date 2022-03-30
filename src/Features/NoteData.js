import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    value: [],
    editKey: false,
    editId: 0,
  },
  reducers: {
    insertNote: (state, action) => {
      if (action.payload.title !== "" || action.payload.desc !== "")
        state.value = [action.payload, ...state.value];
    },
    deleteNote: (state, action) => {
      state.value = state.value.filter((i, index) => {
        return index !== action.payload;
      });
    },
    editClick: (state, action) => {
      state.editKey = !state.editKey;
      state.editId = action.payload;
    },
    editNote: (state, action) => {
      state.value = state.value.filter((i, index) => {
        if (index === state.editId) {
          if (action.payload.title !== "")
            state.value[state.editId].title = action.payload.title;
          if (action.payload.desc !== "")
            state.value[state.editId].desc = action.payload.desc;
          if (action.payload.color !== "")
            state.value[state.editId].color = action.payload.color;
        }
        return state.value[index];
      });
    },
  },
});

export const { insertNote, deleteNote, editClick, editNote } =
  noteSlice.actions;
export default noteSlice.reducer;
