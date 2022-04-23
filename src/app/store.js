import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer'

const state = configureStore({
  reducer
})

export default state