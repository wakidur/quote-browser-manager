import { 
  FETCH_FIREBASE, 
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FIREBASE:
      return action.payload;
    default:
      return state;
  }
};