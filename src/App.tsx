import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { selectCounterValue } from './features/selectors';
import { LiftingUpComponent, SlowParentComponent } from './concepts/react-issues/performance';
import ScrollableComponent from './concepts/react-issues/performance/scrollable-component/scrollable-component';
import ScrollableComponentFix from './concepts/react-issues/performance/scrollable-component/scrollable-component-fix';
import { HtmlToPdf, JobBoard, PhoneNumberInput, SearchComponent, StarRating, TicTacToeBoard } from './code-examples';
import { MtgCounterArea } from './code-examples/mtg-counter-area';

function App() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();
 
  const increase = () => {
    dispatch(increment())
  }

  const decrease = () => {
    dispatch(decrement())
  }

  return (
    <div style={{backgroundColor: 'white'}}>
      {/* <ScrollableComponent /> */}
      {/* <ScrollableComponentFix /> */}
      {/* <LiftingUpComponent /> */}
      <JobBoard />
      {/* <SearchComponent /> */}
      {/* <TicTacToeBoard />
      <MtgCounterArea />
      <HtmlToPdf />
      <PhoneNumberInput />
      <SlowParentComponent />
      <h1>Counter: {count}</h1>
      <h1>Test: 0</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <StarRating maxStars={5} defaultValue={0} /> */}
    </div>
  );
}

export default App;
