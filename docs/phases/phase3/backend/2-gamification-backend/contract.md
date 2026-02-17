
# Contract: Gamification Backend


## Compliance Checklist
- [x] All request/response fields mapped to canonical types in `src/shared/types/canonicalModels.ts`
- [x] Error codes mapped to canonical error codes in `src/shared/types/errorCodes.ts`
- [x] Validation requirements mapped to canonical models and shared validation logic
- [x] Field names and types are consistent with canonical models
- [x] Explicit error code mapping provided

### Request: Update Gamification State
- `userId` ([UserId](../../../src/shared/types/canonicalModels.ts), required)
- `action` (string, required): e.g., "login", "share", "complete_suggestion"

Canonical Type Reference: [`GamificationRequest`](../../../../../src/shared/types/canonicalModels.ts)

### Response: Gamification Status
- `badges` (string[]): Earned badges
- `streak` (number): Current streak count
- `rewards` (Array<{ type: string; value: string | number }>):
  - `type` (string): Reward type
  - `value` (string|number): Reward value

Canonical Type Reference: [`GamificationResponse`](../../../../../src/shared/types/canonicalModels.ts)


## Field Mapping Table
| Contract Field | Canonical Type | CanonicalModels.ts Reference |
|---------------|---------------|------------------------------|
| userId        | UserId        | GamificationRequest.userId    |
| action        | string        | GamificationRequest.action    |
| badges        | string[]      | GamificationResponse.badges   |
| streak        | number        | GamificationResponse.streak   |
| rewards       | Array<{ type: string; value: string | number }> | GamificationResponse.rewards |
| type (reward) | string        | GamificationResponse.rewards[].type |
| value (reward)| string \| number | GamificationResponse.rewards[].value |

## Example Payloads

### Request
```json
{
  "userId": "abc123",
  "action": "share"
}
```

### Response
```json
{
  "badges": ["first-share", "streak-5"],
  "streak": 5,
  "rewards": [
    {"type": "coupon", "value": "5% off"}
  ]
}
```


## Error Code Mapping
| HTTP Status | Error Description     | Canonical Error Code (ApiErrorCodes) |
|-------------|----------------------|--------------------------------------|
| 200         | Success              | -                                    |
| 400         | Invalid action       | invalid_request                      |
| 404         | User not found       | not_found                            |
| 500         | Server error         | server_error                         |

Canonical Error Codes Reference: [`ApiErrorCodes`](../../../../../src/shared/types/errorCodes.ts)


## Validation Requirements Mapping
- `userId` must be a valid [UserId] (UUID v4). See shared validation in [`validateUserId`](../../../../../src/shared/types/validation.ts).
- `action` must be a supported string (application logic).
- All validation logic should use shared utilities in [`validation.ts`](../../../../../src/shared/types/validation.ts) where possible.

## Notes
- All payloads are JSON.
- All request/response types and error codes are explicitly mapped to canonical models and error codes.
