const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');

const {
  ERR_CONFLICT_MSG_SAME_MOVIE,
  ERR_NOT_FOUND_MSG_MOVIE,
  ERR_FORBIDDEN_MSG_MOVIE,
  ERR_BAD_REQUEST_MSG_INCORRECT_DATA,
} = require('../utils/constants');

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  const owner = req.user._id;
  Movie.findOne({ owner, movieId })
    .then((movie) => {
      if (movie) {
        return next(new ConflictError(ERR_CONFLICT_MSG_SAME_MOVIE));
      }
      return Movie.create({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        owner,
      });
    })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA));
      }
      next(err);
    });
};

const deleteMovie = (req, res, next) => {
  const { id } = req.params;
  const owner = req.user._id;
  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return next(new NotFoundError(ERR_NOT_FOUND_MSG_MOVIE));
      }
      if (!movie.owner.equals(owner)) {
        return next(new ForbiddenError(ERR_FORBIDDEN_MSG_MOVIE));
      }
      return movie.remove()
        .then(() => {
          res.send(movie);
        });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA));
      }
      next(err);
    });
};

const getSavedMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA));
      }
      next(err);
    });
};

module.exports = { createMovie, deleteMovie, getSavedMovies };
