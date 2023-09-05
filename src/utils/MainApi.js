class MainApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
    _handleResponse(res) {
        return res.ok ? res.json() : Promise.reject(res.status);
    } 
    createMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (movie),
        }).then((res) => this._handleResponse(res));
    }
    removeMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            'Content-Type': 'application/json'
        }
        }).then((res) => this._handleResponse(res));
    }
    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => this._handleResponse(res));
    }
    register(userdata) {
        return fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({ 
            name: userdata.name,
            email:userdata.email, 
            password: userdata.password 
        }),
        }).then((res) => this._handleResponse(res));
      }
    login(userdata) {
        return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({ 
            email:userdata.email, 
            password: userdata.password 
        }),
        }).then((res) => this._handleResponse(res));
      }
    editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(data),
        }).then((res) => this._handleResponse(res));
    }
     checkToken () {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => this._handleResponse(res));
     }
}
const mainApiConfig = {
    baseUrl: 'https://api.kinoman.nomoreparties.sbs',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
    }
  }
const mainApi = new MainApi (mainApiConfig);
export default mainApi;