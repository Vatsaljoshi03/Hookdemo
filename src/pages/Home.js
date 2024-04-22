import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home () {



    return (
        <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>About React </Card.Title>
          <Card.Text>
            Click this button for more details .
          </Card.Text>
     <Button variant=""><Link  to = '/home/about'>Click heare</Link></Button>
 
        </Card.Body>
      </Card>
    );
}

export default Home;
