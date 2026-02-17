# Contract: Social Sharing API

## Compliance Checklist
- [x] All request/response fields mapped to canonical types in `src/shared/types/canonicalModels.ts`
- [x] Error codes mapped to canonical error codes in `src/shared/types/errorCodes.ts`
- [x] Validation rules consistent with canonical models
- [x] Explicit error code mapping provided
- [x] Field mapping table included

---

## Data Structures

### Request: Share Mood/Suggestion
- `userId` ([UserId](../../../../src/shared/types/canonicalModels.ts), required): Unique user identifier
- `mood` (string, required): User's current mood
- `suggestion` (string, required): Coffee suggestion text
- `platform` (string, required): Target social platform (e.g., "twitter", "facebook")

#### Validation Rules
- `userId` must conform to [UserId](../../../../src/shared/types/canonicalModels.ts) (UUID v4, non-empty string)
- `mood` and `suggestion` must be non-empty UTF-8 strings (1-256 chars)
- `platform` must be a non-empty string and one of the supported platforms

### Response: Share Result
- `success` (boolean): Whether sharing was successful
- `shareUrl` (string, optional): URL to the shared post
- `error` (string, optional): Error message if failed

## Field Mapping Table

| Contract Field | Canonical Type (src/shared/types/canonicalModels.ts) |
|---------------|------------------------------------------------------|
| userId        | UserId                                               |
| mood          | string                                               |
| suggestion    | string                                               |
| platform      | string                                               |
| success       | boolean                                              |
| shareUrl      | string                                               |
| error         | string                                               |

---

## Example Payloads

### Request
```json
{
  "userId": "abc123",
  "mood": "energized",
  "suggestion": "Try a double espresso!",
  "platform": "twitter"
}
```

### Response (Success)
```json
{
  "success": true,
  "shareUrl": "https://twitter.com/post/xyz"
}
```

### Response (Error)
```json
{
  "success": false,
  "error": "Platform not supported"
}
```

## Error/Status Codes & Mapping

| HTTP Status | Canonical Error Code (src/shared/types/errorCodes.ts) | Description                |
|-------------|------------------------------------------------------|----------------------------|
| 200         | -                                                    | Success                    |
| 400         | VALIDATION_ERROR, INVALID_REQUEST                    | Validation or bad request  |
| 401         | UNAUTHORIZED                                         | Unauthorized               |
| 404         | NOT_FOUND                                            | Resource not found         |
| 415         | UNSUPPORTED_MEDIA_TYPE                               | Unsupported media type     |
| 413         | PAYLOAD_TOO_LARGE                                    | Payload too large          |
| 500         | SERVER_ERROR                                         | Internal server error      |

See `ApiErrorCodes` in [src/shared/types/errorCodes.ts](../../../../src/shared/types/errorCodes.ts) for all canonical error codes.

## Notes
- All payloads are JSON.
- Ensure proper escaping for text fields.
- Platform-specific formatting may be required.
- All types and error codes referenced above are defined in the canonical model and error code files for strict contract enforcement.
