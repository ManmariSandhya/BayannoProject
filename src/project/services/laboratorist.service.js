import { deleteItem, get, save } from "./context.service";




//creating variable for user api
const url = "http://localhost:4001/laboratorist/";

// create url for delete
const deleteLaboratoristurl = "http://localhost:4001/deleteLaboratorist/"

//function for get a registered user
export function getLaboratorist(){
    return get(url);
}

//function for saving user data
export function saveLaboratorist(data){
    return save(url,data);
}

// export function updateDoctor(url,data){
//     return update(url,data)
// }

// create a function for delete property type
export function deleteLaboratorist(id){
    return deleteItem(deleteLaboratoristurl+id)
}