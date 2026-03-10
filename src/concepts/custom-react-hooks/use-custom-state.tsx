import ReactDOM from "react-dom";
import App from "../../App";

// Internal state tracking
let currentStates: any[] = [];
let originalIndex = 0;

export const useState = <T,>(initialState: T): [T, (value: T | ((prev: T) => T)) => void] => {
  const currentIndex = originalIndex;

  if (currentStates[currentIndex] === undefined) {
    currentStates[currentIndex] = initialState;
  }

  originalIndex++;

  const setCurrentState = (nextState: T | ((prev: T) => T)) => {
    const currentValue = currentStates[currentIndex];
    currentStates[currentIndex] =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(currentValue)
        : nextState;

    // Re-render the root component
    const rootElement = document.getElementById("root");
    if (rootElement) {
      originalIndex = 0; // reset before re-render
      ReactDOM.render(<App />, rootElement);
    }
  };

  return [currentStates[currentIndex], setCurrentState];
};
