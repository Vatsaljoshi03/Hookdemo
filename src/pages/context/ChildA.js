import React, { useContext } from "react";

import { GlobalInfo } from "../Usecontext";
import ChildB from "./ChildB";

function ChildA (){
     const {appColor} = useContext(GlobalInfo);
     console.log("appColor");

    return (
        <div>
        <h1 style = {{color:appColor}}>ChildA  </h1>
        <ChildB/>
        </div>
    )
}

export default ChildA;
