# Frontend-Backend Contract: Mood Input (Text/Voice)

## Request Schema (Frontend → Backend)
- **Endpoint:** `/api/mood-input`
- **Method:** POST
- **Content-Type:** `application/json`

### Fields
| Field      | Type   | Required | Description                | Validation                |
|------------|--------|----------|----------------------------|---------------------------|
| mood_text  | string | Yes      | User's mood as text        | 1-256 chars, UTF-8        |
| mood_voice | string | No       | Base64-encoded audio blob  | WAV/MP3, max 30s, Base64  |
| user_id    | string | Yes      | Unique user identifier     | UUID v4                   |

### Example Request
```json
{
  "mood_text": "Feeling energetic!",
  "mood_voice": null,
  "user_id": "b1c2d3e4-f5a6-7890-abcd-ef1234567890"
}
```

## Response Schema (Backend → Frontend)
- **Content-Type:** `application/json`

### Fields
| Field      | Type   | Description                |
|------------|--------|----------------------------|
| status     | string | "success" or "error"      |
| message    | string | Info or error message      |
| mood_id    | string | (On success) Mood entry ID |

### Example Response (Success)
```json
{
  "status": "success",
  "message": "Mood recorded.",
  "mood_id": "mood-123456"
}
```

### Example Response (Error)
```json
{
  "status": "error",
  "message": "Invalid audio format."
}
```


## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| mood_text             | moodText                   |
| mood_voice            | moodVoice                  |
| user_id               | userId                     |
| mood_id               | moodId                     |

## Error/Status Codes (Canonical)
- 200: Success (`status: 'success'`)
- 400: Validation error (`ApiErrorCodes.VALIDATION_ERROR`)
- 415: Unsupported media type (`ApiErrorCodes.UNSUPPORTED_MEDIA_TYPE`)
- 500: Server error (`ApiErrorCodes.SERVER_ERROR`)

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON and UTF-8 encoded
- [x] Audio is Base64-encoded WAV/MP3, max 30s

## Notes
- Audio must be Base64-encoded WAV or MP3, max 30 seconds.
- All text fields must be UTF-8 encoded.
- Use JSON for all payloads.
