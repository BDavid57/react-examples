import { useState } from "react";

const buttonStyle = {padding: '10px 15px 10px 15px', border: 'none', backgroundColor: 'white', fontSize: '32px'}

export const MtgCounter = () => {
  const [counter, setCounter] = useState(40);
  const [name, setName] = useState('')
  const [displayName, setDisplayName] = useState(false)

  return (
    <div style={{ margin: '25px', border: '1px solid black' }}>
      <div style={{margin: '15px'}}>
        {displayName ? 
        <>
          <div style={{marginLeft: '15px', fontSize: '32px'}} onClick={() => setDisplayName(false)}>
            {name}
          </div>
        </> 
        : 
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <button onClick={() => setDisplayName(true)}>Set</button>
        </>
        }
      </div>
      <div style={{ padding: '25px' }}>
        <button style={buttonStyle} onClick={() => setCounter(prev => prev - 1)}>-</button>
        <span style={{ margin: '15px', fontSize: '32px'}}>{counter}</span>
        <button style={buttonStyle} onClick={() => setCounter(prev => prev + 1)}>+</button>
      </div>
    </div>
  )
}
