import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import isomorphicFetch from 'isomorphic-fetch';

export const login = (email, password) => {
	  return {
		      type: LOGIN,
		      user: { email, password },
		    };
}

export const boundLogin = (email, password) => (dispatch) => {
	  return dispatch(login(email, password));
};

export const logout = () => {
	  return {
		      type: LOGOUT,
		    };
}

export const boundLogout = () => (dispatch) => {
	  return dispatch(logout());
};

export const displayNotificationDrawer = () => {
	  return {
		      type: DISPLAY_NOTIFICATION_DRAWER,
		    };
}

export const boundNotificationDrawer = () => (dispatch) => {
	  return dispatch(displayNotificationDrawer());
};

export const hideNotificationDrawer = () => {
	  return {
		      type: HIDE_NOTIFICATION_DRAWER,
		    };
}

export const boundHideNotificationDrawer = () => (dispatch) => {
	  return dispatch(hideNotificationDrawer());
};

export function loginSuccess(data) {
	  return {
		      type: LOGIN_SUCCESS,
		      payload: data,
		    };
}

export function loginFailure(error) {
	  return {
		      type: LOGIN_FAILURE,
		      payload: error,
		    };
}

export function loginRequest(email, password) {
	  return (dispatch) => {
		      dispatch(boundLogin(email, password)); // Note: Removed .then() chaining

		      return isomorphicFetch('http://localhost:8564/login-success.json')
		        .then((res) => res.json())
		        .then((data) => dispatch(loginSuccess(data)))
		        .catch(error => dispatch(loginFailure(error)));
		    };
}

