# Frontend-Backend Contract: Onboarding/Session

## Request Schema (Frontend → Backend)
- **Endpoint:** `/api/onboarding`
- **Method:** POST
- **Content-Type:** `application/json`

### Fields
| Field      | Type   | Required | Description                | Validation                |
|------------|--------|----------|----------------------------|---------------------------|
| user_id    | string | Yes      | Unique user identifier     | UUID v4                   |
| device_id  | string | No       | Device identifier          | String, optional          |

### Example Request
```json
{
  "user_id": "b1c2d3e4-f5a6-7890-abcd-ef1234567890",
  "device_id": "device-001"
}
```

## Response Schema (Backend → Frontend)
- **Content-Type:** `application/json`

### Fields
| Field      | Type   | Description                |
|------------|--------|----------------------------|
| status     | string | "success" or "error"      |
| message    | string | Info or error message      |
| session_id | string | (On success) Session ID    |

### Example Response (Success)
```json
{
  "status": "success",
  "message": "Onboarding complete.",
  "session_id": "session-abc123"
}
```

### Example Response (Error)
```json
{
  "status": "error",
  "message": "User ID missing."
}
```


## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| user_id               | userId                     |
| device_id             | deviceId                   |
| session_id            | sessionId                  |

## Error/Status Codes (Canonical)
- 200: Success (`status: 'success'`)
- 400: Validation error (`ApiErrorCodes.VALIDATION_ERROR`)
- 500: Server error (`ApiErrorCodes.SERVER_ERROR`)

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Session ID is unique per onboarding

## Notes
- All payloads in JSON.
- Session ID should be unique per onboarding.
