
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { getcatalogReducer } from "./reducers/catalogReducers";
import { cartReducer } from "./reducers/cartReducers";
import { wishlistReducer } from "./reducers/wishlistReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducers";
import { addToOrderTrackReducer } from "./reducers/ordertrackReducers";
import { securityReducer } from "./reducers/securityReducers";
// import {createLogger} from 'redux-logger';

const allReducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  productDetails: getProductDetailsReducer,
  wishlist: wishlistReducer,
  category: getcatalogReducer,
  ordertrack: addToOrderTrackReducer,
  login: securityReducer,
});



// const middleware = [{ thunk }];
const categoryFromLocalStorage = localStorage.getItem("category")
  ? JSON.parse(localStorage.getItem("category"))
  : [];
const INITIAL_STATE = {
  category: {
    categoryItems: categoryFromLocalStorage,
  },
};


// Apply thunk middleware directly
const store = createStore(allReducers, INITIAL_STATE, applyMiddleware(thunk));

const store = CreateStore(
  allReducers,
  INITIAL_STATE,
  applyMiddleware(thunk)
);


export default store;
