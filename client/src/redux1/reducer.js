import { ADD_QUESTION, GET_ALL_QUESTION } from "./action.type";

let initState = {
  questions: [],
};

const mainReducer = (state = initState, action) => {
  if (action.type === GET_ALL_QUESTION) {
    return {
      ...state,
      questions: [...action.payload],
    };
  } else if (action.type === ADD_QUESTION) {
    return {
      ...state,
      questions: [state.questions, ...action.payload],
    };
  } else {
    return {
      ...state,
    };
  }
};

export default mainReducer;
