import { combineReducers} from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";
import booksReducer from "./books/BooksReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    booksData: booksReducer
});
export default rootReducer;