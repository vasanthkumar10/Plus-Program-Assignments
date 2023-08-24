import { ADD_BIKE, BUY_BIKE } from "./bikeTypes";

export const buyBike = (qnty = 1) => {
  return {
    type: BUY_BIKE,
    payload: {
      quantity: qnty,
    },
  };
};

export const addBike = (qnty = 1) => {
  return {
    type: ADD_BIKE,
    payload: {
      quantity: qnty,
    },
  };
};
