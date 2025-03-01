const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  TOKEN_EXPIRED: 'Your session has expired. Please log in again',
  TOKEN_INVALID: 'Invalid authentication token',
  EMAIL_ALREADY_EXISTS: 'Email is already registered',
  USERNAME_ALREADY_EXISTS: 'Username is already taken',
  ACCOUNT_INACTIVE: 'Your account is inactive. Please contact support',
  EMAIL_NOT_VERIFIED: 'Please verify your email address before proceeding',
  PASSWORD_RESET_EXPIRED: 'Password reset link has expired',
  OTP_INVALID: 'Invalid OTP code',
  OTP_EXPIRED: 'OTP code has expired',
};

const RESOURCE_ERRORS = {
  NOT_FOUND: 'Resource not found',
  ALREADY_EXISTS: 'Resource already exists',
  FORBIDDEN: 'You do not have permission to access this resource',
  INVALID_ID: 'Invalid ID format',
  VALIDATION_ERROR: 'Validation error',
};

const USER_ERRORS = {
  NOT_FOUND: 'User not found',
  ALREADY_FOLLOWING: 'You are already following this user',
  NOT_FOLLOWING: 'You are not following this user',
  CANNOT_FOLLOW_SELF: 'You cannot follow yourself',
};

module.exports = {
  AUTH_ERRORS,
  RESOURCE_ERRORS,
  USER_ERRORS,
};
