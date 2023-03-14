import axios from "axios";
import {
  BOOK_CREATE_FAIL,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
} from "../constants/bookConstants";

export const createBook = (
  image1,
  image2,
  image3,
  image4,
  title,
  author,
  ISBN,
  yearPublish,
  condition,
  singleStock,
  quantity,
  price,
  description
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: BOOK_CREATE_REQUEST,
      payload: {
        image1,
        image2,
        image3,
        image4,
        title,
        author,
        ISBN,
        yearPublish,
        condition,
        singleStock,
        quantity,
        price,
        description,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/books/createBook`, {
        image1,
        image2,
        image3,
        image4,
        title,
        author,
        ISBN,
        yearPublish,
        condition,
        singleStock,
        quantity,
        price,
        description,
      });
      setTimeout(() => {
        dispatch({ type: BOOK_CREATE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BOOK_CREATE_FAIL, payload: message });
    }
  };
};

export const listBook = () => {
  return async (dispatch) => {
    dispatch({ type: BOOK_LIST_REQUEST });
    try {
      const { data } = await axios.get(`/api/books`);

      setTimeout(() => {
        dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
    }
  };
};

export const deleteActivity = (bookId) => {
  return async (dispatch, getState) => {
    dispatch({ type: BOOK_DELETE_REQUEST, payload: bookId });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/books/${bookId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      setTimeout(() => {
        dispatch({ type: BOOK_DELETE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BOOK_DELETE_FAIL, payload: message });
    }
  };
};

export const updateBook = (
  bookId,
  image1,
  image2,
  image3,
  image4,
  title,
  author,
  ISBN,
  yearPublish,
  condition,
  singleStock,
  quantity,
  price,
  description
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: BOOK_UPDATE_REQUEST,
      payload: {
        image1,
        image2,
        image3,
        image4,
        title,
        author,
        ISBN,
        yearPublish,
        condition,
        singleStock,
        quantity,
        price,
        description,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(
        `/api/books/${bookId}`,
        {
          image1,
          image2,
          image3,
          image4,
          title,
          author,
          ISBN,
          yearPublish,
          condition,
          singleStock,
          quantity,
          price,
          description,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      setTimeout(() => {
        dispatch({ type: BOOK_UPDATE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: BOOK_UPDATE_FAIL, payload: message });
    }
  };
};

export const detailsActivity = (bookId) => {
  return async (dispatch) => {
    dispatch({ type: BOOK_DETAILS_REQUEST, payload: bookId });
    try {
      const { data } = await axios.get(`/api/books/${bookId}`);
      dispatch({ type: BOOK_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BOOK_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
