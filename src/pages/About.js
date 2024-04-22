import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import hello from '../img/First.png';
import second from '../img/Second.png';
import img from '../img/img4.png';
import {data} from '../Component/Data';


function About() {

 

    return (
        <div className="container mt-3" style={{ backgroundColor: 'dark text-white' }}  >
            <h1>React Reference Overview</h1>
            <Card className="mt-4" bg="light" text="dark">
                <Card.Body>

                    <h2>React</h2>
                    Programmatic React features:

                    <br /> Hooks - Use different React features from your components.
                    <br />Components - Documents built-in components that you can use in your JSX.
                    <br />APIs - APIs that are useful for defining components.
                    <br /> Directives - Provide instructions to bundlers compatible with React Server Components.

                    <br /> <br /> <br />
                    <h2>createbrowserrouter</h2>
                    This is the recommended router for all React Router web projects. It uses the <Link>DOM History API</Link> to update the URL and manage the history stack.

                    <br /> <br />
                    <Card.Img
                        variant="top"
                        src={hello}
                        style={{ width: '100%', maxWidth: '650px', margin: 'auto' }}
                    />

                    <br /><br /><br />
                    <h2> Differences Between Browser Router and Hash Router <h5> <Link to="https://blog.racheltomi.work/differences-between-browser-router-and-hash-router">More details</Link></h5></h2>

                    <Card.Img
                        variant="top"
                        src={second}
                        style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}
                    />

                    <br /><br />
                
                
                    {

                     data.map((item,index)=>(
                      
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
                    <Card style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src= {img} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>

                            <Button variant="primary"><Link to = {`/home/about/${item.id}`}>gogogo</Link></Button>
                        </Card.Body>
                    </Card>
                    </div>
                   

                     )
                     

                     )

                    }
                   
                
           
                 
                  </Card.Body>
                 <Button variant=""><Link to='/home' style={{ color: 'black', textDecoration: '' }}>Back to Home</Link></Button>
             </Card>
        </div>
    );
}

export default About;
