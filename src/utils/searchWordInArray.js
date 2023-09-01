function searchWordInArray(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      const a = keyword.toLowerCase().trim();
      return movie.nameRU.toLowerCase().indexOf(a) !== -1 || movie.nameEN.toLowerCase().indexOf(a) !== -1
    })
  }

export default searchWordInArray;