import { deleteItem, get, save, update } from "./context.service";




//creating variable for user api
const url = "http://localhost:4001/pharmacist/";

// create url for delete
const deletePharmacisturl = "http://localhost:4001/deletePharmacist/"

//function for get a registered user
export function getPharmacist(){
    return get(url);
}

//function for saving user data
export function savePharmacist(data){
    return save(url,data);
}

export function updateDoctor(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deletePharmacist(id){
    return deleteItem(deletePharmacisturl+id)
}