import {getUser} from './Login.service';
export const loginActions = {
    login
};

export function login(username, password) {
    let userInfo = getUser();
    let validUser = userInfo.users.filter(user => user.username == username && user.password == password);
    if(validUser.length){
        return ({type: 'SUCCESS', payload: validUser[0]})
    }else{
        return ({type: "FAILURE"})
    }

}