// import Firebase from 'firebase';
// const Data = new Firebase('https://quote-browser-manager.firebaseio.com/');
import favqsApi from "../apis/favqs-api";

import firebaseDb from "../apis/firebase";

import {
  FETCH_QUOTE,
  FETCH_QUOTES,
  CREATE_QUOTE,
  FETCH_FIREBASE,
} from "./types";

export const createQuote = (formValues) => async (dispatch) => {
  const response = await firebaseDb.child("favorite_quotes").push(formValues);

  dispatch({ type: CREATE_QUOTE, payload: response.data });
};

// export const fetchFirebase = () => async (dispatch) => {
//   const response = await firebaseDb.child('favorite_quotes').on('value', snapshot =>  snapshot.val());

//   dispatch({ type: FETCH_FIREBASE, payload: response.data });

// };
export const fetchFirebase = () => async  (dispatch) => {
  return  dispatch => {
    favqsApi.on('value', snapshot => {
        dispatch({
            type: FETCH_FIREBASE,
            payload: snapshot.val()
        });
    });
  }
};



export const fetchQuotes = () => async (dispatch) => {
  const response = await favqsApi.get("/api/quotes/");
  dispatch({
    type: FETCH_QUOTES,
    payload: response.data.quotes,
  });
};

export const fetchQotd = () => async (dispatch) => {
  const response = await favqsApi.get(`/api/qotd`);

  dispatch({
    type: FETCH_QUOTE,
    payload: response.data,
  });
};
