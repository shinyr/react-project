import { userData } from '../../json/users.json'

const loginService = {
    getUser
};

export function getUser() {
    console.log("userData", userData);
    return {
            "users": [
                    {
                        "username": "admin",
                        "password": "admin123"
                    },
                    {
                        "username": "user1",
                        "password": "user1"
                    },
                    {
                        "username": "user2",
                        "password": "user2"
                    },
                    {
                        "username": "user3",
                        "password": "user3"
                    }
                ]
            };
}

export default loginService;