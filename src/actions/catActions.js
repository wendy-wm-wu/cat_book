import catAPI from '../api/catAPI';
import * as types from './actionTypes';

export function loadCats() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return catApi.getAllCats()
      .then(cats => {
        dispatch(loadCatsSuccess(cats));
      }).catch(error => {
        throw(error);
      });
  };
}

export function loadCatsSuccess(cats) {
  return { type: types.LOAD_CATS_SUCCESS, cats };
}


