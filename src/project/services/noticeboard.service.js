import { deleteItem, get, save } from "./context.service";


//creating variable for user api
const url = "http://localhost:4001/notice/";

// create url for delete
const deleteNoticeurl = "http://localhost:4001/deleteNotice/";

//function for get a registered user
export function getNotice(){
    return get(url);
}

//function for saving user data
export function saveNotice(data){
    return save(url,data);
}

// export function updateDoctor(url,data){
//     return update(url,data)
// }

// create a function for delete property type
export function deleteNotice(id){
    return deleteItem(deleteNoticeurl+id)
}