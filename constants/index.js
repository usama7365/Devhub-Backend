/**
 * This file serves as the central hub for all constant values used throughout the application.
 * By consolidating constants here, we simplify the import process, allowing developers to easily
 * access various constants with a single import statement. For example, you can import constants
 * like USER_ROLES and APP_CONFIG using:
 * const { USER_ROLES, APP_CONFIG } = require('../constants');
 */

const enums = require('./enums');
const { APP_CONFIG } = require('./config/app');
const {
  AUTH_ERRORS,
  RESOURCE_ERRORS,
  USER_ERRORS,
} = require('./messages/errors');
const { USER_VALIDATION, BLOG_VALIDATION } = require('./validation/schemas');

module.exports = {
  ...enums,

  APP_CONFIG,

  AUTH_ERRORS,
  RESOURCE_ERRORS,
  USER_ERRORS,

  USER_VALIDATION,
  BLOG_VALIDATION,
};
