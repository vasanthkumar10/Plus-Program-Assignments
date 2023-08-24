import { BUY_CAR, ADD_CAR } from "./carTypes";

const initialState = {
  numOfCars: 10,
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      if (state.numOfCars <= 0) return state;
      return { ...state, numOfCars: state.numOfCars - action.payload.quantity };

    case ADD_CAR:
      return { ...state, numOfCars: state.numOfCars + action.payload.quantity };

    default:
      return state;
  }
};
