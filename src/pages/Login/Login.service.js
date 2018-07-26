var userData = require('../../json/users.json');

const loginService = {
    getUser
};

export function getUser() {
    return userData;
}

export default loginService;