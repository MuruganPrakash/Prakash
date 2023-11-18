import React, { createContext } from "react";
import ChildComponent from "./UseContextDemo";
export const MyContext=createContext();
export default function ParentComponent(){
    return(
        <MyContext.Provider value="UseContext is created Successfully">
            <ChildComponent/>
        </MyContext.Provider>
    )
}