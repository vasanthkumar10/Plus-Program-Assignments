import CarContainer from "./components/CarContainer";
import BikeContainer from "./components/BikeContainer";
import UserContainer from "./components/UserContainer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import CarHooksContainer from "./components/CarHooksContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CarContainer />
        <BikeContainer />
        <CarHooksContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
