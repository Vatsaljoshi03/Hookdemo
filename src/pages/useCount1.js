import React from 'react'
import useCustom from './useCustom';

function useCount1() {

 const [count , Increment, Decrement] = useCustom();
  return (
    
    <div>

    <div>{count}</div>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </div>

  )
}

export default useCount1;