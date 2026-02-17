# Accessibility Enhancements API Contract

## Overview
Defines any data exchanged between frontend and backend to support accessibility features.

## Data Schema (if applicable)
```json
{
  "userId": "string (UUID)",
  "accessibilityPreferences": {
    "textSize": "string (small|medium|large)",
    "contrastMode": "string (normal|high)",
    "screenReader": "boolean"
  }
}
```
- **Validation:**
  - `userId`: required, valid UUID
  - `accessibilityPreferences`: optional, if present must match schema

## Example Payload
```json
{
  "userId": "b1a2c3d4-e5f6-7890-abcd-1234567890ef",
  "accessibilityPreferences": {
    "textSize": "large",
    "contrastMode": "high",
    "screenReader": true
  }
}
```

## Error/Status Codes (Canonical)
- 200: Success (`status: 'success'`)
- 400: Invalid request (`ApiErrorCodes.INVALID_REQUEST`)
- 500: Server error (`ApiErrorCodes.SERVER_ERROR`)

## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case)         | Canonical Type (camelCase)      |
|-------------------------------|---------------------------------|
| user_id                       | userId                           |
| accessibility_preferences     | accessibilityPreferences         |
| text_size                     | textSize                         |
| contrast_mode                 | contrastMode                     |
| screen_reader                 | screenReader                     |

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Handles missing optional fields gracefully

## Notes
- All payloads are JSON
- Extend schema as new accessibility features are added
