# Voice Interaction Backend API Contract

## Overview
Defines the data exchange for voice input/output between frontend and backend.

## Voice Input Request Schema
```json
{
  "userId": "string (UUID)",
  "audio": "base64-encoded string (WAV/MP3)",
  "language": "string (ISO 639-1, e.g., 'en')"
}
```
- **Validation:**
  - `userId`: required, valid UUID
  - `audio`: required, non-empty, valid base64
  - `language`: required, valid ISO code

## Voice Output Response Schema
```json
{
  "transcript": "string",
  "intent": "string (optional)",
  "responseAudio": "base64-encoded string (WAV/MP3, optional)",
  "status": "string (success|error)",
  "errorCode": "string (optional)",
  "message": "string (optional)"
}
```

## Example Voice Input
```json
{
  "userId": "b1a2c3d4-e5f6-7890-abcd-1234567890ef",
  "audio": "UklGRiQAAABXQVZFZm10IBAAAAABAAEA...",
  "language": "en"
}
```

## Example Voice Output
```json
{
  "transcript": "Suggest a coffee for a rainy day.",
  "intent": "get_suggestion",
  "responseAudio": "UklGRiQAAABXQVZFZm10IBAAAAABAAEA...",
  "status": "success"
}
```


## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| user_id               | userId                     |
| response_audio        | responseAudio              |
| error_code            | errorCode                  |

## Error/Status Codes (Canonical)
- `success`: Processed successfully (`status: 'success'`)
- `invalid_audio`: Audio could not be decoded (`ApiErrorCodes.VALIDATION_ERROR` or custom)
- `unsupported_language`: Language not supported (`ApiErrorCodes.INVALID_REQUEST` or custom)
- `server_error`: Internal error (`ApiErrorCodes.SERVER_ERROR`)

## Compliance Checklist
## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Audio is base64-encoded WAV/MP3

## Notes
- Audio is base64-encoded WAV or MP3
- All payloads are JSON
- Response may omit `responseAudio` if not needed
