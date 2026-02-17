# Contract: Gamification Elements UI

## Data Structures

### Request to Backend
- `userId` (string, required): Must be a valid [UserId](../../../src/shared/types/canonicalModels.ts) (UUID v4). Validation: non-empty, valid UUID format.
- `action` (string, required): Action performed by the user. Allowed values: "login", "share", "complete_suggestion", etc. Validation: non-empty, must match supported action list.

### Response from Backend
- `badges` (string[], required): List of badge identifiers. Validation: array of non-empty strings.
- `streak` (integer, required): Current user streak. Validation: integer >= 0.
- `rewards` (array of objects, required): List of rewards.
  - `type` (string, required): Reward type. Validation: non-empty string.
  - `value` (string|number, required): Reward value. Validation: string or number, non-empty if string.

## Example Payloads

### Request
```json
{
  "userId": "abc123",
  "action": "complete_suggestion"
}
```

### Response
```json
{
  "badges": ["daily-user"],
  "streak": 1,
  "rewards": []
}
```

## Error/Status Codes & Mapping

| HTTP Status | Error Code (ApiErrorCodes)         | Description           |
|-------------|------------------------------------|-----------------------|
| 200         | —                                  | Success               |
| 400         | validation_error, invalid_request   | Bad request/validation|
| 404         | not_found                          | User not found        |
| 401         | unauthorized                       | Unauthorized          |
| 415         | unsupported_media_type              | Unsupported media     |
| 413         | payload_too_large                  | Payload too large     |
| 500         | server_error                       | Server error          |

See [ApiErrorCodes](../../../../src/shared/types/errorCodes.ts) for canonical error code definitions.

## Notes
- All requests/responses use JSON.
- UI should display badges, streaks, and rewards visually.

## Field Mapping Table

| Contract Field | Canonical Type (src/shared/types/canonicalModels.ts) | Notes/Validation |
|---------------|------------------------------------------------------|------------------|
| userId        | UserId                                               | UUID v4, required|
| action        | GamificationRequest.action (string)                  | Supported action, required |
| badges        | GamificationResponse.badges (string[])               | Array, required  |
| streak        | GamificationResponse.streak (number)                 | Integer >= 0, required |
| rewards       | GamificationResponse.rewards (Array<{type,value}>)   | Array, required  |
| type          | GamificationResponse.rewards[].type (string)         | Non-empty, required |
| value         | GamificationResponse.rewards[].value (string|number) | Non-empty if string, required |

## Canonical Types Referenced
- [UserId, GamificationRequest, GamificationResponse](../../../../src/shared/types/canonicalModels.ts)
- [ApiErrorCodes](../../../../src/shared/types/errorCodes.ts)

## Validation Requirements
- All fields are required unless otherwise specified.
- `userId`: Must be a valid UUID v4 string.
- `action`: Must be a supported action string (see backend for allowed values).
- `badges`: Must be an array of non-empty strings.
- `streak`: Must be an integer >= 0.
- `rewards`: Must be an array of objects with required `type` (non-empty string) and `value` (string or number).

## Compliance Checklist
- [x] All fields mapped to canonical types
- [x] Error codes reference canonical error codes
- [x] Validation requirements specified for all fields
- [x] Field mapping table provided
- [x] Canonical types and error codes referenced explicitly
