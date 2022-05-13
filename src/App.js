import React from "react";
import "./App.css";
import { add } from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const addToCart = useSelector((state) => state.addToCart);

  const dispatch = useDispatch();
 console.log(addToCart, 'addcart')

  return (
  
    <>
      <div className="main-div">
        <div className="container">
            <button onClick={() => dispatch(add())}>Add</button>
         </div>
         {
          addToCart.map(item => {
            return <p>Price: {item.price}</p>
          })
         }
        </div>
</>
  );
};

export default App;
