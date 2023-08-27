class MainApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
    _handleResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject(`Ошибка: ${res.status}`);
      }
    } 
    createMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify (movie),
        }).then((res) => this._handleResponse(res));
    }
    removeMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
        method: "DELETE",
        headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }
    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }
}

const mainApiConfig = {
    baseUrl: 'https://api.kinoman.nomoreparties.sbs',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0NjcxMGFjODVhM2QzZWZjMzVmMDYiLCJpYXQiOjE2OTI2OTAyMTIsImV4cCI6MTY5MzI5NTAxMn0.0mg4nRKWWcKfN-mUVa4DBYKOui-Y9K0mS2wsLMkTVis',
        'Content-Type': 'application/json'
    }
  }
const mainApi = new MainApi (mainApiConfig);
export default mainApi;