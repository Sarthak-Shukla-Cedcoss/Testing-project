import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";
import { buyIceCream } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const Dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes --- {numOfCakes} </h2>
      <button onClick={()=>Dispatch(buyCake())}>Buy Cake</button>
      <br/>
      <h2>Number Of iceCream --- {numOfIceCream} </h2>
      <button onClick={()=>Dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
}

export default HooksCakeContainer;
