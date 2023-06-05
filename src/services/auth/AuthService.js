import axios from 'axios';
import requestWithAuthToken from "../AxiosIntersceptor";

const API_URL = 'http://localhost:8082/api/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    requestWithAuthToken.post(API_URL+"logout")
    .then(
      ()=>localStorage.removeItem('user')
    );
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      name: user.name,
      surname: user.surname,
      email: user.email,
      birthday: user.birthday,
      password: user.password
    });
  }
}

export default new AuthService();