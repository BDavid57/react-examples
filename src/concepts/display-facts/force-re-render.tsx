import { useState, useRef } from "react";

export const ForceReRenderComponent = () => {
  const [rerender,forceRerender] = useState({});
  const elementRef = useRef<HTMLDivElement>(null);
  
    const handleReRender = () => {
      if (elementRef.current) {
        const before = elementRef.current.innerHTML;
  
        forceRerender({});
        // forceRerender((prev) => prev + 1); 
  
        setTimeout(() => {
          if (elementRef.current) {
            const after = elementRef.current.innerHTML; 
  
            if (before === after) {
              console.log('No DOM update occurred.');
            } else {
              console.log('DOM updated!');
            }
          }
        }, 0); // Allow React render to complete
      }
    };
  
    console.log('re-rendered')

  return (
    <div style={{backgroundColor: 'white'}} ref={elementRef}>
      <h1>Test: 0</h1>
      <button onClick={handleReRender}>Force Re-Render</button>
    </div>
  )
}
