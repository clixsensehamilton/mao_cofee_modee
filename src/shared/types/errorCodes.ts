// Canonical error codes for Mao Coffee Modee APIs
// Used by both frontend and backend

export const ApiErrorCodes = {
  VALIDATION_ERROR: 'validation_error',
  INVALID_REQUEST: 'invalid_request',
  NOT_FOUND: 'not_found',
  UNAUTHORIZED: 'unauthorized',
  UNSUPPORTED_MEDIA_TYPE: 'unsupported_media_type',
  PAYLOAD_TOO_LARGE: 'payload_too_large',
  SERVER_ERROR: 'server_error',
} as const;

export type ApiErrorCode = typeof ApiErrorCodes[keyof typeof ApiErrorCodes];
