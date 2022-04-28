import React from 'react'

function ChildComponent(props) {
  return (
      <div>
          <button onClick={()=>props.greetHandler('chiki chiki')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent