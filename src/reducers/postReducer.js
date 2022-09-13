import {
  POST_REQUEST,
  POST_SUCCES,
  POST_FAIL,
  CLEAR_ERROR,
  POST_SEARCH,
} from "../constants/postConstants";

export const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };

    case POST_SUCCES:
      return {
        loading: false,
        posts: action.payload,
      };

    case POST_FAIL:
      return {
        loading: false,
        posts: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
