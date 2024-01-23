import { deleteItem, get, save } from "./context.service";

//creating variable for user api
const url = "http://localhost:4001/accountant/";

// create url for delete
const deleteAccountanturl = "http://localhost:4001/deleteAccountant/"

//function for get a registered user
export function getAccountant(){
    return get(url);
}

//function for saving user data
export function saveAccountant(data){
    return save(url,data);
}

// export function updateDoctor(url,data){
//     return update(url,data)
// }

// create a function for delete property type
export function deleteAccountant(id){
    return deleteItem(deleteAccountanturl+id)
}