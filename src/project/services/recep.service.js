import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4001/rece/";

// create url for delete
const deleteReceurl = "http://localhost:4001/deleteRece/"

//function for get a registered user
export function getRece(){
    return get(url);
}

//function for saving user data
export function saveRece(data){
    return save(url,data);
}

export function updateRece(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deleteRece(id){
    return deleteItem(deleteReceurl+id)
}