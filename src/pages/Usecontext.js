import React from 'react';
import Card from 'react-bootstrap/Card';
import ChildA from './context/ChildA';
import { createContext, useState } from 'react';
import ChildC from './context/ChildC';

export const GlobalInfo = createContext(); // Exporting GlobalInfo

function Usecontext() {
    const [color, setColor] = useState('green');
    const [day , setDay] = useState('ne');

    const getDay=(item)=>{
       console.log(item);
       setDay(item);
    }

    return (
        <div className="container mt-4">
            <h1>useContext  {day}</h1>
            <Card className="mt-4">
                <Card.Body>
                    <h2>Why we use</h2>
                    The useContext hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level.
                    <br /><br />
                    <h2>When to use:</h2>
                    share state or behavior between components that aren't directly connected through the component hierarchy.
                </Card.Body>
            </Card>
            <br />
            <GlobalInfo.Provider value={{ appColor: color, getDay:getDay }}>
                <ChildA />
                <ChildC/>
            </GlobalInfo.Provider>
        </div>
    );
}

export default Usecontext;
