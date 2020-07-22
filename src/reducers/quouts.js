import { 
  FETCH_QUOTES, 
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    default:
      return state;
  }
};