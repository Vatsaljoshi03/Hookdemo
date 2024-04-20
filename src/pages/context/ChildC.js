import React, { useContext } from "react";

import { GlobalInfo } from "../Usecontext";

function ChildC (){
     const {appColor} = useContext(GlobalInfo);
     const getDay=(item)=>{
        console.log(item);
     }

    return (
        <div>
        <h1 style = {{color:appColor}}>ChildC </h1>
        </div>
    )
}

export default ChildC;
