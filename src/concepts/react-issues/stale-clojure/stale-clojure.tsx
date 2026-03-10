import { useState } from "react"

export const StaleClojureExample = () => {
  const [count, setCount] = useState(0);

  const startCounting = () => {
    setInterval(() => {  // The setInterval gets sent to the call stack and keeps using the initial value
      setCount(count + 1);
      // setCount(count => count + 1);  => FIX
    }, 500)
  }
  
  return (
    <div style={{margin: '25px'}}>
      {count}
      <button onClick={startCounting}>Start</button>
    </div>
  )
}
