import {
  POST_REQUEST,
  POST_SUCCES,
  POST_FAIL,
  CLEAR_ERROR,
} from "../constants/postConstants";
import axios from "axios";
export const getPost =
  (keyWord = "") =>
  async (dispatch) => {
    let data = [];
    try {
      dispatch({ type: POST_REQUEST });
      console.log(keyWord, "keyword");
      let link = `https://jsonplaceholder.typicode.com/posts`;
      if (keyWord.length > 3) {
        link = `https://jsonplaceholder.typicode.com/posts?search=${keyWord}&_page=1&_limit=5`;
      }
      const { data } = await axios.get(link);

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
