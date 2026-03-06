import { useReducer } from "react";
function UseReducerComp() {
  const initialnumber = { count: 0, inc: 2, dec: 2 };
  const reducer = (number, action) => {
    console.log(action, number);
    switch (action.type) {
      case "INCREMENT":
        //return { count: number.count + 1 };
        return { ...number, count: number.count + 2 }; // ...number means keep the other numbers rather except count

      case "DECREMENT":
        //return { count: number.count + 1 };
        return { ...number, count: number.count - 2 };

      case "RESET":
        //return { count:0 };
        return { ...number, count: 0 };

      default:
        return number;
    }
  };

  const [number, dispatch] = useReducer(reducer, initialnumber);

  return (
    <div className="p-4 flex flex-co justufy-center items center">
      <p>{number.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
export default UseReducerComp;
