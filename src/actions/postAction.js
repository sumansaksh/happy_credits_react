import {
  POST_REQUEST,
  POST_SUCCES,
  POST_FAIL,
  CLEAR_ERROR,
} from "../constants/postConstants";
import axios from "axios";
export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: POST_REQUEST });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    dispatch({ type: POST_SUCCES, payload: data });
  } catch (error) {
    //console.log(error.response.data.message,"eeeeeeeeeeeeeror")
    dispatch({
      type: POST_FAIL,
      payload: error,
    });
  }
};

export const clearError = async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
