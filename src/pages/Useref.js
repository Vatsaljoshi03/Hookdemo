import React from 'react';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react';


function Useref () {
 
    let inputRef= useRef(null)

    function handleInput(){
        inputRef.current.value="1000"
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.display='none';
    }

    return (
        <div className="container mt-4">
        <h1>useRef Hook</h1>

        <Card className="mt-4">
            <Card.Body><h2>Why we use</h2>The React useRef hook is useful for storing values that persist across re-renders, but don't cause re-rendering. This makes it a good choice for accessing DOM elements, storing mutable data, referencing interval or timeout IDs, and tracking previous state or props. 
            Here are some examples of using useRef: Track application renders, Focus the input, Keep track of previous state values, and Working with external libraries.
            <br/><br/> <h2>When to use:</h2>Storing Mutable Data.
            
            </Card.Body>
        </Card>
       <br/>

       <input type='text' ref={inputRef} /> 
       <button onClick= {handleInput }>Handle input</button>
          
        </div>
    );
}

export default Useref;
        