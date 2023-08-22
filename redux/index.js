// redux -> good to know topic
// Redux -> a predictable state management tool

// managing the state -> useState and useReducer

// smaller applications -> 20 to 30 components -> useReducer and useContext

// REDUX -> large(enterprise) applications
// It makes the normal code into a complex one

// REDUX -> is a common tool for all the JS frameworks like Vanilla JS, React, Vue, Angular...
// react-redux -> bridge between react and redux

// --------------------------
// REDUX - 3 main principles
// --------------------------
/**
 * 1. Store -> holds the state of entire application -> always use 1 store
 * 2. Action -> describes an event -> what happens in the component
 * 3. Reducer -> connects the component and the store -> make changes in the store
 */

// Note:
// 1. The state of the entire application is stored in a single object
// 2. The only way to change the state is by emitting (dispatch) an action
// 3. To specify how the state is going to change, always use reducer

const redux = require("redux");

const { createStore, combineReducers } = redux;

// Action types
const BUY_CAR = "BUY_CAR";
const ADD_CAR = "ADD_CAR";
const BUY_BIKE = "BUY_BIKE";
const ADD_BIKE = "ADD_BIKE";

// action object
// let obj = {
//   type: BUY_CAR,
//   payload: {
//     quantity: 1,
//     model: "Maruti brezza",
//     year: 2023,
//     type: "VXI automatic transmission",
//   },
// };

// Action creator (factory method)
function buyCar() {
  return {
    type: BUY_CAR,
    payload: {
      quantity: 1,
      model: "Maruti brezza",
      year: 2023,
      type: "VXI automatic transmission",
    },
  };
}

function addCar(qnty = 1) {
  return {
    type: ADD_CAR,
    payload: {
      quantity: qnty,
    },
  };
}

function buyBike(qnty) {
  return {
    type: BUY_BIKE,
    payload: {
      quantity: qnty,
    },
  };
}

function addBike(qnty) {
  return {
    type: ADD_BIKE,
    payload: {
      quantity: qnty,
    },
  };
}

// default state -> initial state
// const initialState = {
//   noOfCars: 10,
//   noOfBikes: 20,
// };

const initialCarState = {
  noOfCars: 10,
};

const initialBikeState = {
  noOfBikes: 20,
};

// reducers
const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return { ...state, noOfCars: state.noOfCars - 1 };
    case ADD_CAR:
      return { ...state, noOfCars: state.noOfCars + action.payload.quantity };
    default:
      return state;
  }
};

const bikeReducer = (state = initialBikeState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return { ...state, noOfBikes: state.noOfBikes - action.payload.quantity };
    case ADD_BIKE:
      return { ...state, noOfBikes: state.noOfBikes + action.payload.quantity };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,
});

// store
const store = createStore(rootReducer);
console.log("initial state", store.getState());

// subscription -> C2
const unsubscribe = store.subscribe(() =>
  console.log("state changed", store.getState())
);

// components
store.dispatch(buyCar()); // C1
store.dispatch(buyCar()); // C3
// unsubscribe();
store.dispatch(buyCar()); // C4
// console.log("after buying", store.getState());

store.dispatch(addCar());
store.dispatch(addCar(5));

store.dispatch(buyBike(2));
store.dispatch(addBike(10));
