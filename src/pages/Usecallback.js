import React from 'react';
import Card from 'react-bootstrap/Card';
import {useState, useCallback} from "react";
import Back from './back/Back';

function Usecallback (){

     const [add, setAdd] = useState(0);
     const [count, setCount] = useState(0);
     const Learning = useCallback(()=> {
     },[count]);
    
    return (
        <div className="container mt-4">
            <h1>useCallback</h1>

            <Card className="mt-4">
                <Card.Body>
                    <h2>Why we use</h2>The useCallback hook is a powerful tool that can be used to improve the performance of React components.
                     By memoizing callback functions, useCallback can prevent unnecessary re-renders, which can lead to a smoother user experience.
                <br /><br />
                    <h2>When to use:</h2> used to memoize callback functions that are passed to child components.
                </Card.Body>
            </Card>
            <br/>
            <Back Learning= {Learning}/>
            <h1>{add}</h1>
            <button onClick= {() =>setAdd(add + 1)}>Addition</button>
            <h1>{count}</h1>
            <button onClick= {() =>setCount(count + 2)}>Addition</button>

        </div>
    );
}
export default Usecallback;

