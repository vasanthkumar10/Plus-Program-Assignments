const redux = require("redux");
const reduxlogger = require("redux-logger");
const thunkMiddleware = require("redux-thunk").default;
const { createStore, applyMiddleware } = redux;
const axios = require("axios");

const logger = reduxlogger.createLogger();

// initial state
const initialState = {
  loading: false,
  data: [],
  error: "",
};

// Action keys
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// action creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.response.statusText));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
  }
};

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));
// store.subscribe(() => console.log("store updated", store.getState()));

// dispatch
store.dispatch(fetchUsers());
