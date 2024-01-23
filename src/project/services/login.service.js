import { get, save } from "./context.service";



//creating variable for user api
const url = "http://localhost:4001/login/";

//function for get a registered user
export function getLoginUser(){
    return get(url);
}

//function for saving user data
export function saveLoginUser(data){
    return save(url,data);
}