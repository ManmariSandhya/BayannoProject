import { get, save } from "./context.service";


//creating variable for user api
const url = "http://localhost:4001/contactus/";

//function for get a registered user
export function getContactUs(){
    return get(url);
}

//function for saving user data
export function saveContactUs(data){
    return save(url,data);
}