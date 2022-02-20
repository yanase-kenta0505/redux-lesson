import React from "react";
import { useSelector,useDispatch } from "react-redux";
// import Count from "./components/count";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch()
  const increase = ()=>{
    dispatch({type:"INCREASE_COUNT"})
  }
  const decrease = ()=>{
    dispatch({type:"DECREASE_COUNT"})
  }
  return (
    <div>
      <h1>Redux Lesson</h1>
      <p>Count:{count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </div>
  );
};

export default App;
