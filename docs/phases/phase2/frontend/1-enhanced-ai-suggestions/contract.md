# Enhanced AI Suggestions UI Contract

## Overview
Specifies the data contract for frontend-backend communication regarding nuanced coffee suggestions, fun facts, and commentary.

## Request Schema
See backend contract for full schema. Frontend must:
- Validate `userId` as UUID
- Restrict `mood` and `caffeineLevel` to allowed enums
- Send only non-empty `preferences` and `context` fields

## Response Schema
See backend contract for full schema. Frontend must:
- Render all `suggestions` entries
- Display `funFact` and `commentary` if present
- Handle `status` and show error messages for non-success

## Example Payloads
Refer to backend contract for canonical examples.


## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| user_id               | userId                     |
| fun_fact              | funFact                    |
| caffeine_level        | caffeineLevel              |

## Error/Status Codes (Canonical)
- `invalid_request`: (`ApiErrorCodes.INVALID_REQUEST`)
- `not_found`: (`ApiErrorCodes.NOT_FOUND`)
- `server_error`: (`ApiErrorCodes.SERVER_ERROR`)

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Handles missing optional fields gracefully

## Notes
- All requests/responses are JSON
- Handle missing optional fields gracefully
- Follow accessibility guidelines for displaying suggestions and errors
