import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";


// reducer function
const reducer = (state,action)=>{
   switch (action.type){
    case "propertyTypes":
        return{
            ...state,propertyTypes:action.data
        }
    case "useData":
        return{
            ...state,useData:action.data
        }
   }
}

// create a store variable and export
const store = configureStore({reducer:reducer});
export default store;