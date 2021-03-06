const OAuth2Error = require('./oauth2error');

/**
 * `AuthorizationError` error.
 *
 * @api public
 */
class AuthorizationError extends OAuth2Error {
  constructor(message, code, uri, status) {
    if (!status) {
      switch (code) {
        case 'invalid_request':
          status = 400;
          break;
        case 'unauthorized_client':
          status = 403;
          break;
        case 'access_denied':
          status = 403;
          break;
        case 'unsupported_response_type':
          status = 501;
          break;
        case 'invalid_scope':
          status = 400;
          break;
        case 'temporarily_unavailable':
          status = 503;
          break;
      }
    }
    super(message, code, uri, status);

    Error.captureStackTrace(this, this.constructor);
    this.name = 'AuthorizationError';
  }
}

/**
 * Expose `AuthorizationError`.
 */
module.exports = AuthorizationError;
