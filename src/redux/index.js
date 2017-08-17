import { combineReducers } from "redux";
import BooksReducer from "./books";
import ActiveBook from "./ActiveBook";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
