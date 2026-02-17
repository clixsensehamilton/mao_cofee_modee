# Accessibility Improvements UI Contract

## Overview
Specifies the contract for communicating accessibility preferences between frontend and backend.

## Data Schema
See backend contract for full schema. Frontend must:
- Validate `userId` as UUID
- Send only non-default `accessibilityPreferences` fields

## Example Payloads
Refer to backend contract for canonical examples.

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
- All requests/responses are JSON
- Handle missing optional fields gracefully
- Ensure UI updates reflect backend changes
