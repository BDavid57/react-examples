import { LiftingUpComponent, ScrollableComponent, ScrollableComponentFix, SlowParentComponent } from './concepts/react-issues/performance';
import { CounterComponent, HtmlToPdf, JobBoard, MtgCounterArea, PhoneNumberInput, PreserveStateComponent, SearchComponent, StarRating, TicTacToeBoard, TransferList } from './code-examples';

function App() {

  return (
    <div style={{backgroundColor: 'white'}}>
      {/* <ScrollableComponent /> */}
      {/* <ScrollableComponentFix /> */}
      {/* <LiftingUpComponent /> */}
      {/* <JobBoard /> */}
      {/* <SearchComponent /> */}
      {/* <TicTacToeBoard /> */}
      {/* <MtgCounterArea /> */}
      {/* <HtmlToPdf /> */}
      {/* <PhoneNumberInput /> */}
      {/* <SlowParentComponent /> */}
      {/* <StarRating maxStars={5} defaultValue={0} /> */}
      {/* <CounterComponent /> */}
      {/* <TransferList /> */}
      <PreserveStateComponent />
    </div>
  );
}

export default App;
