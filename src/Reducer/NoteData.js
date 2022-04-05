import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    value: [],
    array: [],
    editKey: false,
    name: "",
    editId: 0,
    login: false,
    userID: "",
  },
  reducers: {
    setCompeleteAray: (state, action) => {
      state.array = action.payload;
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    getNotes: (state, action) => {
      state.value = action.payload;
    },
    insertNote: (state, action) => {
      state.array.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.array = state.array.filter((i) => {
        return i.id !== action.payload;
      });
    },
    editClick: (state, action) => {
      state.editKey = !state.editKey;
      state.editId = action.payload;
    },
    editNote: (state, action) => {
      state.array = state.array.filter((i, index) => {
        if (i.id === action.payload.index) {
          state.array[state.editId].title = action.payload.title;
          state.array[state.editId].description = action.payload.description;
          state.array[state.editId].color = action.payload.color;
        }
        return state.array[index];
      });
    },
  },
});

export const {
  insertNote,
  deleteNote,
  editClick,
  editNote,
  getNotes,
  setName,
  setLogin,
  setUserID,
  setCompeleteAray,
} = noteSlice.actions;
export default noteSlice.reducer;
