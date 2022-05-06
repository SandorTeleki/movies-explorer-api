const movieRouter = require('./movies');
const userRouter = require('./users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const { ERR_NOT_FOUND_MSG_ROUTE } = require('../utils/constants');

const routes = (app) => {
  app.use(userRouter);
  app.use(movieRouter);
  app.use(auth, (req, res, next) => {
    next(new NotFoundError(ERR_NOT_FOUND_MSG_ROUTE));
  });
};

module.exports = routes;
