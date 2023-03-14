import {
  BOOK_CREATE_FAIL,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_RESET,
  BOOK_CREATE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_RESET,
  BOOK_DELETE_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_RESET,
  BOOK_UPDATE_SUCCESS,
} from "../constants/bookConstants";

export const bookCreateReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case BOOK_CREATE_REQUEST:
      return { loading: true };
    case BOOK_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        successMessage: action.payload.message,
      };
    case BOOK_CREATE_FAIL:
      return { loading: false, error: action.payload.message };
    case BOOK_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookListReducer = (state = { activityList: [] }, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { loading: true };
    case BOOK_LIST_SUCCESS:
      return { loading: false, bookLists: action.payload };
    case BOOK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DELETE_REQUEST:
      return { loading: true };
    case BOOK_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        successDeleteMessage: action.payload.message,
      };
    case BOOK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BOOK_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_UPDATE_REQUEST:
      return { loading: true };
    case BOOK_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        successUpdateMessage: action.payload.message,
      };
    case BOOK_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BOOK_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case BOOK_DETAILS_REQUEST:
      return { loading: true };
    case BOOK_DETAILS_SUCCESS:
      return { loading: false, book: action.payload };
    case BOOK_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
