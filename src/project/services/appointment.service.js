import { get, save } from "./context.service";

//creating variable for user api
const url = "http://localhost:4001/appointment/";

//function for get a registered user
export function getAppointment(){
    return get(url);
}

//function for saving user data
export function saveAppointment(data){
    return save(url,data);
}