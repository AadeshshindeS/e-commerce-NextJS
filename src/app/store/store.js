const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./crudSlice";

export const store = configureStore({
  reducer,
});
