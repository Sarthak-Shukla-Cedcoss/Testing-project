import { combineReducers } from "redux";
import cakeReduces from "./cake/cakeReduces";
import IceCreamReduces from "./iceCream/iceCreamReducer";

const rootReducers = combineReducers({
    cake: cakeReduces,
    icecream: IceCreamReduces
})

export default rootReducers