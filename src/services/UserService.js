import requestWithAuthToken from "./AxiosIntersceptor";


const USERS_API_BASE_URL = 'http://localhost:8082/api/v1/user/';

class UserService{

    getUser(uid){
        return requestWithAuthToken.get(USERS_API_BASE_URL+uid)
    }

    addPhoto(uid,user){
        return requestWithAuthToken.put(USERS_API_BASE_URL+uid, user, {headers : {'Content-Type': 'application/json'}})
    }
}
export default new UserService();