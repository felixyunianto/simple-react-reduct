import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import authService from "../services/auth.service";

export const signUp = (name, username, email, password, conf_password) => (
  dispatch
) => {
  return authService
    .signUp(name, username, email, password, conf_password)
    .then((data) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: data.message,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      const message =
        (error.response, error.response.data, error.response.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    });
};

export const signIn = (username, password) => (dispatch) => {
  return authService.signIn(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


export const signOut = () => (dispatch) => {
    authService.signOut();

    dispatch({type: LOGOUT})
}
