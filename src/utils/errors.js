export function errors(err) {
    if (err === 400) {
      return `Ошибка ${err} Неверные данные!`;
    } else if (err === 401) {
      return `Ошибка ${err} Неправильный логин или пароль`;
    } else if (err=== 403) {
      return `Ошибка ${err} Ошибка токена`;
    } else if (err === 404) {
      return `Ошибка ${err} Данные не найдены`;
    } else if (err === 409) {
      return `Ошибка ${err} Такой пользователь уже существует`;
    } else {
      return `Ошибка ${err}. На сервере произошла ошибка.`;
    }
}