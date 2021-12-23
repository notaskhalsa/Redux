import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import reducer from "./Users/UserReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: reducer
});

export default rootReducer