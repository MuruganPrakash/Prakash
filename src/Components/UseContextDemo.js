import React, { useContext } from "react";
import {MyContext} from './ParentComponent';
export default function ChildComponent(){
    const Context=useContext(MyContext);
    return(
        <div>
            <h1>{Context}</h1>
        </div>
    )
}