import { useState } from "react";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";

export const ReRenderedComponent = () => {
  console.log('ReRendered component re-rendered')
  const [count, setCount] = useState(0)

  return (
    <>
      <BlaBla />
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      {count}
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <AdditionalComplexThings />
    </>
  );
}
