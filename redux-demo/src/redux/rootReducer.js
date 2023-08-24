import { carReducer } from "./car/carReducer";
import { bikeReducer } from "./bike/bikeReducer";
import { userReducer } from "./user/userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  car: carReducer,
  bike: bikeReducer,
  user: userReducer,
});
