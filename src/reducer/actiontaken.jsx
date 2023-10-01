import React from "react"
import { INITIAL_STATE, reducer } from "./reducer";
import { useContext } from "react";




const DarkContext = React.createContext();


export const DarkProvider=({children})=>{
           const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
     
    return<DarkContext.Provider value={{state, dispatch}}>
        {children}
    </DarkContext.Provider>
}

export const useDark =()=>{
    return useContext(DarkContext)
}