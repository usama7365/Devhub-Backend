/**
 * This file contains validation schema constants that define the rules for user input.
 * These constants are intended for use with validation libraries such as Joi or Yup or might be we use zod || vine,
 * ensuring that data adheres to specified formats and constraints before processing.
 */

const { APP_CONFIG } = require('../config/app');

const USER_VALIDATION = {
  CREATE: {
    username: {
      min: APP_CONFIG.USERNAME_MIN_LENGTH,
      max: APP_CONFIG.USERNAME_MAX_LENGTH,
      pattern: /^[a-zA-Z0-9_-]+$/,
      message: `Username must be between ${APP_CONFIG.USERNAME_MIN_LENGTH} and ${APP_CONFIG.USERNAME_MAX_LENGTH} characters and can only contain letters, numbers, underscores, and hyphens`,
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    password: {
      min: APP_CONFIG.PASSWORD_MIN_LENGTH,
      max: APP_CONFIG.PASSWORD_MAX_LENGTH,
      message: `Password must be between ${APP_CONFIG.PASSWORD_MIN_LENGTH} and ${APP_CONFIG.PASSWORD_MAX_LENGTH} characters`,
    },
    bio: {
      max: APP_CONFIG.BIO_MAX_LENGTH,
      message: `Bio cannot exceed ${APP_CONFIG.BIO_MAX_LENGTH} characters`,
    },
  },
  UPDATE: {
    // Similar to CREATE but with optional fields
  },
};

const BLOG_VALIDATION = {
  CREATE: {
    title: {
      min: 5,
      max: APP_CONFIG.TITLE_MAX_LENGTH,
      message: `Title must be between 5 and ${APP_CONFIG.TITLE_MAX_LENGTH} characters`,
    },
    content: {
      min: 100,
      max: APP_CONFIG.CONTENT_MAX_LENGTH,
      message: `Content must be between 100 and ${APP_CONFIG.CONTENT_MAX_LENGTH} characters`,
    },
    description: {
      min: 10,
      max: APP_CONFIG.DESCRIPTION_MAX_LENGTH,
      message: `Description must be between 10 and ${APP_CONFIG.DESCRIPTION_MAX_LENGTH} characters`,
    },
    tags: {
      max: APP_CONFIG.MAX_TAGS,
      message: `Maximum ${APP_CONFIG.MAX_TAGS} tags allowed`,
    },
  },
  UPDATE: {
    // Similar to CREATE but with optional fields
  },
};

module.exports = {
  USER_VALIDATION,
  BLOG_VALIDATION,
};
