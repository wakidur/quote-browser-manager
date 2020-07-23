
import { FETCH_FIREBASE } from './types';
import firebaseDb from "../apis/firebase";

export function fetchData () {
    return dispatch => {
        firebaseDb.on('value', snapshot => {
            dispatch({
                type: FETCH_FIREBASE,
                payload: snapshot.val()
            });
        });
    }

}

