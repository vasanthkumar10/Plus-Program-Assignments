import React from "react";
import { connect } from "react-redux";
import { addBike, buyBike } from "../redux/bike/bikeActions";

function BikeContainer(props) {
  //   console.log("props", props);
  return (
    <div>
      <h2>No of bikes - {props.numOfBikes}</h2>
      <button onClick={props.buyingBike}>Buy bike</button>
      <button onClick={props.addingBike}>Add bike</button>
    </div>
  );
}

// read state and dispatch event from store and pass it as props
// to the component

const mapStateToProps = (state) => {
  //   console.log("state", state);
  return {
    numOfBikes: state.bike.numOfBikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  //   console.log("dispatch", dispatch);
  return {
    buyingBike: () => dispatch(buyBike(5)),
    addingBike: () => dispatch(addBike(10)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeContainer);
