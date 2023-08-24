import { ADD_BIKE, BUY_BIKE } from "./bikeTypes";

const initialState = {
  numOfBikes: 30,
};

export const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      if (state.numOfBikes <= 0) return state;
      return {
        ...state,
        numOfBikes: state.numOfBikes - action.payload.quantity,
      };

    case ADD_BIKE:
      return {
        ...state,
        numOfBikes: state.numOfBikes + action.payload.quantity,
      };

    default:
      return state;
  }
};
