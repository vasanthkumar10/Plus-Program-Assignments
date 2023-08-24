import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCar, addCar } from "../redux/car/carActions";

function CarHooksContainer() {
  const numOfCars = useSelector((globalState) => globalState.car.numOfCars);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No of Hooks cars - {numOfCars}</h2>
      <button onClick={() => dispatch(buyCar())}>Buy car</button>
      <button onClick={() => dispatch(addCar())}>Add car</button>
    </div>
  );
}

export default CarHooksContainer;
