const { ERR_SERVER } = require('../utils/constants');

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERR_SERVER;
  }
}

module.exports = ServerError;
