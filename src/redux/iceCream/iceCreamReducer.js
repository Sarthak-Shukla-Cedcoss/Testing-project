import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numOfIceCream: 50,
};

const IceCreamReduces = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      }
      default : return state
  }
};
 export default IceCreamReduces;