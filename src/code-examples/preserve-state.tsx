import { useState } from "react"

export const PreserveStateComponent = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {/* This is bad */}
      {/* {show && <Counter />} */}
      

      {/* This is better but still not great */}
      {/* <div hidden={!show}>
        <Counter />
      </div> */}


      {/* This is the proper way to do it */}
      <Activity mode={show ? "visible" : "hidden"}>
        <Counter />
      </Activity>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prev => prev - 1)}>
        Decrement
      </button>
    </div>
  )
}

type ActivityProps = {
  mode: "visible" | "hidden";
  children: React.ReactNode;
};

export function Activity({ mode, children }: ActivityProps) {
  return (
    <div style={{ display: mode === "visible" ? "block" : "none" }}>
      {children}
    </div>
  );
}
