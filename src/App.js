import React from "react";
import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.IncDec);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="main">
          <h1>Increement/Decreement Counter</h1>
          <h2>
            using <span className="text-custom">React </span>and{" "}
            <span className="text-custom">Redux</span>
          </h2>
          <div className="main-block">
            <button
              className="opertor-block"
              onClick={() => dispatch(incNumber())}
            >
              +
            </button>
            <input type="text" value={myState}></input>
            <button
              className="opertor-block"
              onClick={() => dispatch(decNumber())}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
