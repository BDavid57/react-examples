import { useState } from "react"

type Props = {
  blablaComponent: any, 
  additionalComplexThingsComponent: any
}

export const ReRenderedComponentFix = ({blablaComponent, additionalComplexThingsComponent}: Props) => {
  console.log('ReRendered component re-rendered')
  const [count, setCount] = useState(0)

  //
  // YOU CAN ALSO USE REACT.MEMO()
  // YOU CAN ALSO USE REACT.MEMO()
  // YOU CAN ALSO USE REACT.MEMO()
  //

  return (
    <>
      {blablaComponent}
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      {count}
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      {additionalComplexThingsComponent}
    </>
  );
}
