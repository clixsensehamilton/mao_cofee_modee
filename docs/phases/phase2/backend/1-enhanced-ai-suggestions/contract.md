# Enhanced AI Suggestions API Contract

## Overview
Defines the data exchange between frontend and backend for delivering nuanced coffee suggestions, fun facts, and playful commentary.

## Request Schema
```json
{
  "userId": "string (UUID)",
  "mood": "string (enum: happy, tired, adventurous, etc.)",
  "preferences": {
    "caffeineLevel": "string (enum: low, medium, high)",
    "flavorNotes": ["string"]
  },
  "context": {
    "timeOfDay": "string (e.g., 'morning')",
    "location": "string (optional)"
  }
}
```
- **Validation:**
  - `userId`: required, valid UUID
  - `mood`: required, must be one of allowed values
  - `preferences`: optional, if present must match schema
  - `context`: optional

## Response Schema
```json
{
  "suggestions": [
    {
      "coffeeName": "string",
      "description": "string",
      "funFact": "string (optional)",
      "commentary": "string (optional)"
    }
  ],
  "status": "string (success|error)",
  "errorCode": "string (optional)",
  "message": "string (optional)"
}
```

## Example Request
```json
{
  "userId": "b1a2c3d4-e5f6-7890-abcd-1234567890ef",
  "mood": "adventurous",
  "preferences": {
    "caffeineLevel": "high",
    "flavorNotes": ["chocolate", "spicy"]
  },
  "context": {
    "timeOfDay": "afternoon"
  }
}
```

## Example Response
```json
{
  "suggestions": [
    {
      "coffeeName": "Spicy Mocha Adventure",
      "description": "A bold blend with chocolate and chili notes.",
      "funFact": "Mocha originated in Yemen.",
      "commentary": "Perfect for an afternoon pick-me-up!"
    }
  ],
  "status": "success"
}
```

## Error/Status Codes (Canonical)
- 200: Success (`status: 'success'`)
- 400: Invalid request (`ApiErrorCodes.INVALID_REQUEST`)
- 404: Not found (`ApiErrorCodes.NOT_FOUND`)
- 500: Server error (`ApiErrorCodes.SERVER_ERROR`)

## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| user_id               | userId                     |
| fun_fact              | funFact                    |
| caffeine_level        | caffeineLevel              |

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON and UTF-8 encoded
- [x] Handles missing optional fields gracefully

## Notes
- All payloads are JSON, UTF-8 encoded.
- Optional fields may be omitted or set to null.
- Extend enums as needed for new moods or preferences.
