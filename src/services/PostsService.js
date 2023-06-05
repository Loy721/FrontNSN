import requestWithAuthToken from "./AxiosIntersceptor";

const POST_API_BASE_URL = 'http://localhost:8082/api/v1/post';

class PostsService{

    getPosts(){
        return requestWithAuthToken.get(POST_API_BASE_URL) 
    }

    getPostsByUid(uid) {
        return requestWithAuthToken.get(POST_API_BASE_URL+"/"+uid) 
    }

    deletePost(uid, data) {
        return requestWithAuthToken.delete(POST_API_BASE_URL+'/'+uid+'/'+data)
    }

    createPost(publication, topic, content, image) {
        const json = JSON.stringify({ publication: publication, topic: topic, content: content, image: image });
        return requestWithAuthToken.post(POST_API_BASE_URL, json, {headers : {'Content-Type': 'application/json'}})
    }
}

export default new PostsService();