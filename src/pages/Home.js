import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { UserContext } from './context/Store';


function Home () {

     const {cat, data , setData}  = useContext(UserContext) 
     setData ('vatsal')

    return (
        <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>{cat}
        <h1>{data}</h1>
          <Card.Title>About React </Card.Title>
          <Card.Text>
            Click this button for more details .
          </Card.Text>
     <Button variant=""><Link  to = '/home/about'>Click here</Link></Button>
 
        </Card.Body>
      </Card>
    );
}

export default Home;
