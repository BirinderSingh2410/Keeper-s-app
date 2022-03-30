import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../Features/NoteData";

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
