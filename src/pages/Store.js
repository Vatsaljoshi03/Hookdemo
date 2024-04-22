import React from 'react'
import { data } from '../Component/Data';
import { Link, useParams } from 'react-router-dom';
import img from '../img/img4.png';
import Card from 'react-bootstrap/Card';
 
const Store = () => {
    const param = useParams()
    // console.log(param);
   const id = param.id
   const dataId = parseInt(id);
    const cat = data.find(cat=>cat.id === dataId);
 

    if(!cat){
        return <div>page not found</div>
    }
  return (
    <div>        
            <h2>Card dtails</h2>
            <div className="recipe-detail">
                
               <div style={{textAlign:'center'}}>
               <Card.Img variant="top" src= {img} style={{ width: '18rem', margin: '1rem' }} />
               
               <h3 >{cat.name}</h3>
                 
                <p>task1 : {cat.moreDetails[0].task1}</p>
                <p>task2 : {cat.moreDetails[0].task2}</p>
                
               <Link to = {'/home/about'}>Go to Previos page  </Link>
              
                </div>
            </div>
        </div>
  )
}
 
export default Store;