import React from 'react';
import Card from 'react-bootstrap/Card';
import { useReducer } from 'react';

const initialState = 0; 
const reducer = (state, action) => {
    switch (action) {
        case 'add':
            return state + 1
        case 'remove':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
const Usereducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container mt-4">
            <h1>useReducer</h1>

            <Card className="mt-4">
                <Card.Body><h2>Why we use</h2>The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.
                    <br /><br /> <h2>When to use: </h2>if you need to update several state variables together or perform calculations based on the state changes, useReducer might be a good choice.
                </Card.Body>
            </Card>
            <br />

            <h3>{count}</h3>
            <button onClick={() => dispatch('add')}>increment</button>
            <button onClick={() => dispatch('remove')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>

        </div>
    );
}

export default Usereducer;


