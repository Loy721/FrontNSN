import requestWithAuthToken from "./AxiosIntersceptor";


const USERS_API_BASE_URL = 'http://localhost:8082/api/v1/user';

class UsersService{

    getUsers(suranme,name){
        return requestWithAuthToken.get(USERS_API_BASE_URL+"/"+suranme+"/"+name);
    }

    getSubscribers(uid){
        return requestWithAuthToken.get(USERS_API_BASE_URL+"/"+uid+"/"+"subscribers");
    }

    follow(uid){
        return requestWithAuthToken.post(USERS_API_BASE_URL+"/"+uid+"/"+"follow");
    }

    unfollow(uid){
        return requestWithAuthToken.post(USERS_API_BASE_URL+"/"+uid+"/"+"unfollow");
    }
    
    ban(uid){
        return requestWithAuthToken.post(USERS_API_BASE_URL+"/"+uid+"/"+"ban")
    }

    unban(uid){
        return requestWithAuthToken.post(USERS_API_BASE_URL+"/"+uid+"/"+"unban")
    }

    getPostsByUid(uid){
        return requestWithAuthToken.get(USERS_API_BASE_URL+"/"+uid+"/"+"posts")
    }
}
export default new UsersService();
