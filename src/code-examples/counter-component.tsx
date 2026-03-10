import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";
import { selectCounterValue } from "../features/selectors";

export const CounterComponent = () => {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();
 
  const increase = () => {
    dispatch(increment())
  }

  const decrease = () => {
    dispatch(decrement())
  }

  return <div style={{padding: '50px'}}>
    <h1>Counter: {count}</h1>
    <h1>Test: 0</h1>
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>
  </div>
}
