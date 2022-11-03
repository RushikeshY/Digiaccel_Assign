import axios from "axios";
import { ADD_QUESTION, GET_ALL_QUESTION } from "./action.type";

export function getall(payload) {
  return {
    type: GET_ALL_QUESTION,
    payload,
  };
}

export function addquestion(payload) {
  return {
    type: ADD_QUESTION,
    payload,
  };
}

export const getAll = () => async (dispatch) => {
  await axios
    .get("http://localhost:8080/questions")
    .then((r) => dispatch(getall(r.data)))
    .catch((err) => {
      console.log(err);
    });
};

export const addQuestion = (payload) => async (dispatch) => {
  return await axios
    .post("http://localhost:8080/questions", JSON.stringify(payload))
    .then((r) => dispatch(addquestion(r.data)))
    .catch((err) => {
      console.log(err);
    });
};
