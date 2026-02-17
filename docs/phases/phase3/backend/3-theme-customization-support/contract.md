
# Contract: Theme Customization Backend

## Data Structures

### Request: Set Theme
- `userId` ([UserId](../../../../../../src/shared/types/canonicalModels.ts), required)
- `theme` (string, required): Theme identifier (e.g., "light", "dark", "coffee")

Type: [`ThemeCustomizationPayload`](../../../../../../src/shared/types/canonicalModels.ts)

### Response: Theme Status
- `success` (boolean)
- `theme` (string): Current theme
- `error` (string, optional)

Type: [`ThemeCustomizationResponse`](../../../../../../src/shared/types/canonicalModels.ts)

## Field Mapping Table

| Contract Field | Canonical Type | Source |
|---------------|---------------|--------|
| userId        | UserId        | [canonicalModels.ts](../../../../../../src/shared/types/canonicalModels.ts) |
| theme         | string        | [ThemeCustomizationPayload](../../../../../../src/shared/types/canonicalModels.ts) |
| success       | boolean       | [ThemeCustomizationResponse](../../../../../../src/shared/types/canonicalModels.ts) |
| error         | string        | [ThemeCustomizationResponse](../../../../../../src/shared/types/canonicalModels.ts) |

## Validation Requirements

- `userId` must be a valid [UserId](../../../../../../src/shared/types/canonicalModels.ts) (UUID v4). See validation in [validation.ts](../../../../../../src/shared/types/validation.ts).
- `theme` must be a supported theme identifier (string, validated against allowed values in backend logic).

All validation logic should use shared utilities in [validation.ts](../../../../../../src/shared/types/validation.ts) where possible.

## Example Payloads

### Request
```json
{
  "userId": "abc123",
  "theme": "coffee"
}
```

### Response (Success)
```json
{
  "success": true,
  "theme": "coffee"
}
```

### Response (Error)
```json
{
  "success": false,
  "theme": "light",
  "error": "Theme not supported"
}
```

## Error/Status Codes & Mapping

| HTTP Status | Description           | Canonical Error Code ([errorCodes.ts](../../../../../../src/shared/types/errorCodes.ts)) |
|-------------|----------------------|--------------------------------------------------------|
| 200         | Success              | —                                                      |
| 400         | Invalid theme        | `validation_error` or `invalid_request`                |
| 404         | User not found       | `not_found`                                            |
| 500         | Server error         | `server_error`                                         |

All error codes must use values from [`ApiErrorCodes`](../../../../../../src/shared/types/errorCodes.ts) and [`ApiErrorCode`](../../../../../../src/shared/types/canonicalModels.ts).

## Compliance Checklist

- [x] All contract fields mapped to canonical types
- [x] Error codes reference canonical error codes
- [x] Validation requirements mapped to canonical models and shared validation utilities
- [x] Field mapping table provided
- [x] Explicit references to canonical types and error codes

## Notes
- All payloads are JSON.
- Theme must be one of the supported identifiers.
- All types and error codes referenced from canonical sources.
