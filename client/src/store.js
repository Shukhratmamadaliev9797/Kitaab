import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  bookCreateReducer,
  bookDeleteReducer,
  bookDetailsReducer,
  bookListReducer,
  bookUpdateReducer,
} from "./reducers/bookReducers";
import {
  updateProfileReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducers,
  userSignInReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducers,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  updateProfile: updateProfileReducer,
  bookCreate: bookCreateReducer,
  bookList: bookListReducer,
  bookDelete: bookDeleteReducer,
  bookUpdate: bookUpdateReducer,
  bookDetails: bookDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
