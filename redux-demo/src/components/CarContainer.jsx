import React from "react";
import { connect } from "react-redux";
import { buyCar, addCar } from "../redux/car/carActions";

function CarContainer(props) {
  //   console.log("props", props);
  return (
    <div>
      <h2>No of cars - {props.numOfCars}</h2>
      <button onClick={props.buyingCar}>Buy car</button>
      <button onClick={props.addingCar}>Add car</button>
    </div>
  );
}

// read state and dispatch event from store and pass it as props
// to the component

const mapStateToProps = (state) => {
  //   console.log("state", state);
  return {
    numOfCars: state.car.numOfCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  //   console.log("dispatch", dispatch);
  return {
    buyingCar: () => dispatch(buyCar(5)),
    addingCar: () => dispatch(addCar(10)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
