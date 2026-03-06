import { useReducer } from "react";
function UseReducerComp() {
  const initialState = { count: 0, inc: 2, dec: 2 };
  const reducer = (state, action) => {
    console.log(action, state);
    switch (action.type) {
      case "INCREMENT":
        //return { count: state.count + 1 };
        return { ...state, count: state.count + 2 }; // ...state means keep the other states rather except count

      case "DECREMENT":
        //return { count: state.count + 1 };
        return { ...state, count: state.count - 2 };

      case "RESET":
        //return { count:0 };
        return { ...state, count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 flex flex-co justufy-center items center">
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
export default UseReducerComp;
