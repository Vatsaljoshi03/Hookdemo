import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function Usememo() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    function multiCount(){
        return count*5
    }

    return (
        <div className="container mt-4">
            <h1>useMemo</h1>

            <Card className="mt-4">
                <Card.Body><h2>Why we use</h2>The useMemo Hook in React is a performance optimization tool that can be used to memoize expensive computations. Memoization is a technique that stores the result of a function call and returns the stored result on subsequent calls with the same arguments.
                 This can save time and improve performance, especially when the function is expensive to compute.
                    <br /><br /> <h2>When to use: </h2> Optimizing Rendering Performance.
                </Card.Body>
            </Card>
            <br />
                   <h2>Count: {count}</h2>
                   <h2>Item: {item}</h2>
                   <button onClick={()=> setCount(count + 1)} >Update Count</button>
                   <button onClick={()=> setItem(count * 10)} >Update Item</button>
        </div>
    );
}

export default Usememo;