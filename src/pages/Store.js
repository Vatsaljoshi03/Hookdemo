import React from 'react';
import { useParams } from 'react-router';
import {data} from '../Component/Data'

const Store = () => {

    const param = useParams();
    console.log(data[0])
    console.log(param);

    const id = param.id 
    const aboutId = parseInt(id);
    const aboutdata = data.find(aboutdata =>(data.id === aboutId));
    console.log(aboutdata);
    console.log(data.id);
    return (
        <div>
            
        </div>
    );
}

export default Store;
