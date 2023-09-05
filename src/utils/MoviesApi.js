class MoviesApi {
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
 getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }
}
const movieApiConfig = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    //authorization: '894ca0c1-f322-46d5-9613-0b5b161eddf9',
    'Content-Type': 'application/json'
  }
}
const moviesApi = new MoviesApi (movieApiConfig);

export default moviesApi;