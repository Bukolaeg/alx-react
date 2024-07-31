import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer, loginRequest } from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import isomorphicFetch from 'isomorphic-fetch';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for UI notification action creators', () => {
	  afterEach(() => {
		      fetchMock.restore();
		    });

	  it('should create proper action for login', () => {
		      const email = "dornkaizen@gmail.com";
		      const password = "TryDoItNow";

		      expect(login(email, password)).toEqual({
			            type: LOGIN,
			            user: { email, password },
			          });
		    });

	  it('should create proper action for logout', () => {
		      expect(logout()).toEqual({ type: LOGOUT });
		    });

	  it('should create proper action for displaying notification drawer', () => {
		      expect(displayNotificationDrawer()).toEqual({
			            type: DISPLAY_NOTIFICATION_DRAWER,
			          });
		    });

	  it('should create proper action for hiding notification drawer', () => {
		      expect(hideNotificationDrawer()).toEqual({
			            type: HIDE_NOTIFICATION_DRAWER,
			          });
		    });

	  it('creates LOGIN and LOGIN_SUCCESS when fetching login succeeds', () => {
		      fetchMock.getOnce('http://localhost:8564/login-success.json', {
			            body: { user: 'test' },
			            headers: { 'content-type': 'application/json' }
			          });

		      const expectedActions = [
			            { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
			            { type: LOGIN_SUCCESS, payload: { user: 'test' } }
			          ];
		      const store = mockStore({ user: {} });

		      return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
			            expect(store.getActions()).toEqual(expectedActions);
			          });
		    });

	  it('creates LOGIN and LOGIN_FAILURE when fetching login fails', () => {
		      fetchMock.getOnce('http://localhost:8564/login-success.json', {
			            throws: new Error('Not Found'),
			          });

		      const expectedActions = [
			            { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
			            { type: LOGIN_FAILURE, payload: new Error('Not Found') }
			          ];
		      const store = mockStore({ user: {} });

		      return store.dispatch(loginRequest('test@test.com', 'password')).catch(() => {
			            expect(store.getActions()).toEqual(expectedActions);
			          });
		    });
});

