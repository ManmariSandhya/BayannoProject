
// create a function for set session storage 
export function setSessionStorageItem(key,value){
    if(typeof(value)=="object"){
        value=JSON.stringify(value);
    }
    sessionStorage.setItem(key,value);
}

// get function
export function getSessionStorageItem(key){
    return sessionStorage.getItem(key);
}

// remove funciton
export function removeSessionStorageItem(key){
    sessionStorage.removeItem(key);
}