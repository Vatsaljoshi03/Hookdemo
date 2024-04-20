import React, { useContext } from "react";

import { GlobalInfo } from "../Usecontext";

function ChildB (){
     const {appColor,getDay} = useContext(GlobalInfo);
     const day = "Done";

    return (
        <div>
        <h1 style = {{color:appColor}}>ChildB  </h1>
        <button onClick={()=>getDay(day)}>Click</button>
        </div>
    )
}

export default ChildB;
