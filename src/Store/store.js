import { configureStore } from '@reduxjs/toolkit'
import  notesReducer  from '../Features/NoteData'

export default configureStore({
  reducer: {
      dataArray: notesReducer,
  },
})