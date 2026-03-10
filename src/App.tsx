import { LiftingUpComponent, SlowParentComponent } from './concepts/react-issues/performance';
import ScrollableComponent from './concepts/react-issues/performance/scrollable-component/scrollable-component';
import ScrollableComponentFix from './concepts/react-issues/performance/scrollable-component/scrollable-component-fix';
import { MtgCounterArea } from './code-examples/mtg-counter-area';
import { CounterComponent, HtmlToPdf, JobBoard, PhoneNumberInput, SearchComponent, StarRating, TicTacToeBoard } from './code-examples';

function App() {

  return (
    <div style={{backgroundColor: 'white'}}>
      {/* <ScrollableComponent /> */}
      {/* <ScrollableComponentFix /> */}
      {/* <LiftingUpComponent /> */}
      <JobBoard />
      {/* <SearchComponent /> */}
      {/* <TicTacToeBoard /> */}
      {/* <MtgCounterArea /> */}
      {/* <HtmlToPdf /> */}
      {/* <PhoneNumberInput /> */}
      {/* <SlowParentComponent /> */}
      {/* <StarRating maxStars={5} defaultValue={0} /> */}
      {/* <CounterComponent /> */}
    </div>
  );
}

export default App;
