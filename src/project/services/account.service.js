


//creating variable for user api
const editProfileurl = "http://localhost:4001/editProfile/";

//function for get a registered user
export function getEditProfile(){
    return get(editProfileurl);
}

//function for saving user data
export function saveEditProfile(data){
    return save(editProfileurl,data);
}

//creating variable for user api
const changePasswordurl = "http://localhost:4001/changePassword/";

//function for get a registered user
export function getChangePassword(){
    return get(changePasswordurl);
}

//function for saving user data
export function saveChangePassword(data){
    return save(changePasswordurl,data);
}

