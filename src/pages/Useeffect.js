import React from 'react';
import Card from 'react-bootstrap/Card';
import {useEffect , useState} from 'react';

function Useeffect(){

    const [count , setCount] = useState(0);

useEffect(()=>{

console.log("useEffect");

})


    return (
        <div className="container mt-4">
        <h1>useEffect</h1>

        <Card className="mt-4">
            <Card.Body><h2>Why we use</h2>useEffect hook is used to handle side effects in functional components, such as fetching data, updating the DOM, and setting up subscriptions or timers.
             It is used to mimic the lifecycle methods of class-based components.
             <br/><br/> <h2>When to use:</h2>When you need to perform a side effect, such as updating the document title, fetching data, or subscribing to events.
             </Card.Body>
        </Card>

        <br/>
        <>
        <h1>Example : </h1>
        <h4>Button Clicked {count} time</h4>
        <button onClick={()=> setCount(count+1)}>update value </button>
        
        </>



    </div>


    );
}

export default Useeffect;
