// this authroute functional component doesn't follow return statement
// 1)in paranthasis i am giving props becoz to transfer the data from one component to another we should use props

import { Navigate } from "react-router-dom";
import { getSessionStorageItem } from "./storages/sessionstorage.service";



// 2) this is follow and work on children based
export function AuthRoute(props){
//   create a variable 
let userValid = false;  //here i am taking initially userValid as false becoz first we need to show user not exist

  
// to check user is exist or not we have to do this
userValid = getSessionStorageItem("Login")  // giving details in login page and what ever data stored in localStorage both should be match then only the page will be open. and we are giving "users" as key becoz in localStorage we gave key "users"  that's why here also we gave key as "users"

// next we need to do if user is exist then display the page, for that take if conditons
if(userValid){
    return props.children;
}
else{
    return <Navigate to="/login"></Navigate>
}


}