function checkResponse(res) {
  if (res.ok) {
    console.log(res.json);
    return res.json();
  } else {
    Promise.reject(`Ошибка: ${res.status}`);
  }
}

function getMovies() {
  return fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then((res) => checkResponse(res));
}

export default getMovies;