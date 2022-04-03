import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../Reducer/NoteData";

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
