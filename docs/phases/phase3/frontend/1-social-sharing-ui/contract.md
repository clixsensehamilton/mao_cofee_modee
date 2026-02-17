
# Contract: Social Sharing UI

## Compliance Checklist

- [x] Uses canonical types from `src/shared/types/canonicalModels.ts`
- [x] Maps all error codes to `src/shared/types/errorCodes.ts`
- [x] Explicit field validation requirements
- [x] Field mapping table to canonical types
- [x] Error handling and mapping documented



## Data Structures


### Request to Backend
- `userId` ([UserId](../../../../../src/shared/types/canonicalModels.ts)): User identifier (UUID v4, required, validated via `isValidUUIDv4`)
- `mood` (string): Current mood (required, 1-256 UTF-8 chars)
- `suggestion` (string): Coffee suggestion (required, 1-256 UTF-8 chars)
- `platform` (string): Social platform (required, one of supported platforms, e.g., "facebook", "twitter", "instagram")


### Response from Backend
- `success` (boolean): Operation status
- `shareUrl` (string, optional): URL to the shared post (present if `success` is true)
- `error` (string, optional): Error message (present if `success` is false)


## Field Mapping Table

| Contract Field | Canonical Type (src/shared/types/canonicalModels.ts) | Validation |
|---------------|------------------------------------------------------|------------|
| userId        | UserId                                              | Required, UUID v4, validated via `isValidUUIDv4` |
| mood          | SocialSharePayload.mood (string)                    | Required, 1-256 UTF-8 chars |
| suggestion    | SocialSharePayload.suggestion (string)              | Required, 1-256 UTF-8 chars |
| platform      | SocialSharePayload.platform (string)                | Required, must be a supported value |
| success       | SocialShareResponse.success (boolean)               | Required |
| shareUrl      | SocialShareResponse.shareUrl (string, optional)     | Optional, valid URL if present |
| error         | SocialShareResponse.error (string, optional)        | Optional, present if error |

## Validation Requirements

- `userId`: Must be a valid UUID v4 string. Use `isValidUUIDv4` from `src/shared/utils/validation.ts`.
- `mood`: Required, 1-256 UTF-8 characters.
- `suggestion`: Required, 1-256 UTF-8 characters.
- `platform`: Required, must match one of the supported social platforms (e.g., "facebook", "twitter", "instagram").
- `shareUrl`: If present, must be a valid URL.
- `error`: If present, should be a user-friendly error message.

## Explicit Error Code Mapping

All error codes must map to canonical codes in [`src/shared/types/errorCodes.ts`](../../../../../src/shared/types/errorCodes.ts):

| HTTP Status | Error Code (ApiErrorCode)         | When Triggered                        |
|-------------|-----------------------------------|---------------------------------------|
| 200         | -                                 | Success                               |
| 400         | `validation_error`                | Invalid/missing fields, bad payload   |
| 401         | `unauthorized`                    | User not authenticated                |
| 404         | `not_found`                       | User or resource not found            |
| 415         | `unsupported_media_type`          | Unsupported content type              |
| 413         | `payload_too_large`               | Payload exceeds allowed size          |
| 500         | `server_error`                    | Internal server error                 |

Reference: `ApiErrorCodes` and `ApiErrorCode` in [`src/shared/types/errorCodes.ts`](../../../../../src/shared/types/errorCodes.ts)


### Request
```json
{
  "userId": "abc123",
  "mood": "happy",
  "suggestion": "Try a caramel latte!",
  "platform": "facebook"
}
```

### Response (Success)
```json
{
  "success": true,
  "shareUrl": "https://facebook.com/post/abc"
}
```

### Response (Error)
```json
{
  "success": false,
  "error": "User not authenticated"
}
```


## Error/Status Codes

See explicit error code mapping above. All errors must use canonical codes and be handled gracefully in the UI.


## Notes
- All requests/responses use JSON.
- UI must handle all error codes and messages gracefully, displaying user-friendly feedback.
- All types and error codes referenced from canonical sources for consistency.
