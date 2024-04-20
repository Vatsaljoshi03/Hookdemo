import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Usestate () {

    const [count , Setcounter] = useState(0)

function updateCount(){
    Setcounter(count+1)
}

    return (
        <div className="container mt-4">
        <h1>useState</h1>

        <Card className="mt-4">
            <Card.Body><h2>Why we use</h2>useState is a React Hook that allows you to add state to functional components. Before Hooks, you could only add state to class components.
            useState is a function that takes an initial state value and returns two values:
            The current state value and A function to update the state value.
            You can use useState to track any type of value, including strings, numbers, objects, and arrays.
            <br/><br/> <h2>When to use:</h2>When you need to store and update data within a component
            
            </Card.Body>
        </Card>
<br/>
        <>
        <h1>Example : </h1>
        <h4>Button Clicked {count} time</h4>
        <button onClick={updateCount}>Click me </button>
        
        </>

        
    </div>
    );
}

export default Usestate;
