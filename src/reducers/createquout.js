import _ from "lodash";
import { CREATE_QUOTE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_QUOTE:
      return { ...state, [action.payload]: action.payload };
    default:
      return state;
  }
};
