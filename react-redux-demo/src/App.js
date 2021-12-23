import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import store from "./Redux/Store";
import ItemContainer from "./Components/ItemContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewIceCreamConatiner from "./Components/NewIceCreamConatiner";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <IceCreamContainer />
        <NewIceCreamConatiner />
        <HooksCakeContainer />
        <CakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
