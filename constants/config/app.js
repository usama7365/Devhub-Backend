const APP_CONFIG = Object.freeze({
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  DEFAULT_SORT_FIELD: 'created_at',
  DEFAULT_SORT_ORDER: 'desc',
  MAX_UPLOAD_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: Object.freeze([
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
  ]),
  ALLOWED_ATTACHMENT_TYPES: Object.freeze([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'application/zip',
    'application/x-zip-compressed',
  ]),
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
  BIO_MAX_LENGTH: 500,
  TITLE_MAX_LENGTH: 100,
  CONTENT_MAX_LENGTH: 50000,
  DESCRIPTION_MAX_LENGTH: 500,
  TAG_MAX_LENGTH: 30,
  MAX_TAGS: 5,
  ALLOWED_VIDEO_TYPES: Object.freeze(['video/mp4', 'video/webm']),
  SESSION_TIMEOUT: 30 * 60 * 1000,
});

module.exports = {
  APP_CONFIG,
};
