import { BUY_CAR, ADD_CAR } from "./carTypes";

export const buyCar = (qnty = 1) => {
  return {
    type: BUY_CAR,
    payload: {
      quantity: qnty,
    },
  };
};

export const addCar = (qnty = 1) => {
  return {
    type: ADD_CAR,
    payload: {
      quantity: qnty,
    },
  };
};
