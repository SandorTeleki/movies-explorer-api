const ERR_BAD_REQUEST = 400;
const ERR_UNAUTHORIZED = 401;
const ERR_FORBIDDEN = 403;
const ERR_NOT_FOUND = 404;
const ERR_CONFLICT = 409;
const ERR_SERVER = 500;
const ERR_SERVER_MSG = 'Ошибка на сервере';
const ERR_GENERAL_MSG = 'Ошибка. Что-то пошло не так. :(';
const ERR_NOT_FOUND_MSG_ROUTE = 'Не найден маршрут.';
const ERR_NOT_FOUND_MSG_MOVIE = 'С таким id не найден фильм.';
const ERR_NOT_FOUND_MSG_USER = 'Невозможно отобразить информацию о пользователе, возможно, нужна авторизация.';
const ERR_NOT_FOUND_MSG_MOVIES = 'Нет сохраненных фильмов.';
const ERR_CONFLICT_MSG_SAME_USER = 'Такой пользователь уже существует.';
const ERR_CONFLICT_MSG_SAME_MOVIE = 'Такой фильм уже в списке сохраненных фильмов.';
const ERR_CONFLICT_MSG_SAME_EMAIL = 'Пользователь с таким email уже существует.';
const ERR_BAD_REQUEST_MSG_INCORRECT_DATA = 'Переданы некорректные данные.';
const ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN = 'Неправильная почта или пароль.';
const ERR_UNAUTHORIZED_MSG = 'Необходима авторизация (here?).';
const ERR_FORBIDDEN_MSG_MOVIE = 'Нельзя удалить чужой фильм.';
const MSG_TOKEN_SENT = 'Токен отправлен в куки.';
const MSG_TOKEN_DELETED = 'Токен удален из куки.';
const MSG_MOVIE_SAVED = 'Фильм добавлен в список сохраненных фильмов.';
const MSG_MOVIE_DELETED = 'Фильм удален из списка сохраненных фильмов.';
const MSG_USER_UPDATED = 'Информация о пользователе успешно обновлена.';

const joiErrorMessages = {
  'string.base': '{#label} должно быть строкой.',
  'string.empty': 'Пустое поле {#label}, введите {#label}.',
  'any.required': 'Отсутствует {#label}. Необходимо ввести или добавить {#label}.',
  'string.email': 'Поле {#label} не электронная почта.',
  'string.min': '{#label} должно быть строкой минимум из {#limit} символов.',
  'string.max': '{#label} должно быть строкой максимум из {#limit} символов.',
  'number.base': 'Поле {#label} должно быть числом.',
  'string.length': 'Некорректный формат {#label}. Должна быть строка из {#limit} символов.',
  'string.hex': 'Некорректный формат {#label}. Должна быть строка из 24 символов.',
  'string.pattern.base': 'Некорректный формат {#label}. Должно быть в формате pochta@yandex.ru',
};

module.exports = {
  ERR_BAD_REQUEST,
  ERR_UNAUTHORIZED,
  ERR_FORBIDDEN,
  ERR_NOT_FOUND,
  ERR_CONFLICT,
  ERR_SERVER,
  ERR_SERVER_MSG,
  ERR_GENERAL_MSG,
  ERR_NOT_FOUND_MSG_ROUTE,
  ERR_NOT_FOUND_MSG_MOVIE,
  ERR_NOT_FOUND_MSG_USER,
  ERR_NOT_FOUND_MSG_MOVIES,
  ERR_CONFLICT_MSG_SAME_USER,
  ERR_CONFLICT_MSG_SAME_MOVIE,
  ERR_CONFLICT_MSG_SAME_EMAIL,
  ERR_BAD_REQUEST_MSG_INCORRECT_DATA,
  ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN,
  ERR_UNAUTHORIZED_MSG,
  ERR_FORBIDDEN_MSG_MOVIE,
  MSG_TOKEN_SENT,
  MSG_TOKEN_DELETED,
  MSG_MOVIE_SAVED,
  MSG_MOVIE_DELETED,
  MSG_USER_UPDATED,
  joiErrorMessages,
};
