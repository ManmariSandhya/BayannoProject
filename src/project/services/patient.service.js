import {  deleteItem, get, save } from "./context.service";



//creating variable for user api
const url = "http://localhost:4001/patient/";

// create url for delete
const deletePatienturl = "http://localhost:4001/deletePatient/"

//function for get a registered user
export function getPatient(){
    return get(url);
}

//function for saving user data
export function savePatient(data){
    return save(url,data);
}

// export function updateDoctor(url,data){
//     return update(url,data)
// }

// create a function for delete property type
export function deletePatient(id){
    return deleteItem(deletePatienturl+id)
}