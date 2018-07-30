import {getUser} from './Login.service';
export const loginActions = {
    login,
    logout
};

export function login(username, password) {
    let userInfo = getUser();
    let validUser = userInfo.users.filter(user => user.username == username && user.password == password);
    localStorage.setItem("username",username );
    if(validUser.length){
        return ({type: 'SUCCESS', payload: validUser[0]})
    }else{
        return ({type: "FAILURE"})
    }

}

export function logout(){
    localStorage.removeItem("username");
}