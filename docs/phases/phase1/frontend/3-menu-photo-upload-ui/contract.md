# Frontend-Backend Contract: Menu Photo Upload

## Request Schema (Frontend → Backend)
- **Endpoint:** `/api/menu-upload`
- **Method:** POST
- **Content-Type:** `multipart/form-data`

### Fields
| Field      | Type   | Required | Description                | Validation                |
|------------|--------|----------|----------------------------|---------------------------|
| photo      | file   | Yes      | Menu photo (image)         | JPEG/PNG, max 5MB         |
| user_id    | string | Yes      | Unique user identifier     | UUID v4                   |

### Example Request (Form Data)
- photo: (binary image file)
- user_id: `b1c2d3e4-f5a6-7890-abcd-ef1234567890`

## Response Schema (Backend → Frontend)
- **Content-Type:** `application/json`

### Fields
| Field      | Type   | Description                |
|------------|--------|----------------------------|
| status     | string | "success" or "error"      |
| message    | string | Info or error message      |
| menu_id    | string | (On success) Menu entry ID |

### Example Response (Success)
```json
{
  "status": "success",
  "message": "Menu uploaded.",
  "menu_id": "menu-987654"
}
```

### Example Response (Error)
```json
{
  "status": "error",
  "message": "File too large."
}
```


## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| photo                 | photo                      |
| user_id               | userId                     |
| menu_id               | menuId                     |

## Error/Status Codes (Canonical)
- 200: Success (`status: 'success'`)
- 400: Validation error (`ApiErrorCodes.VALIDATION_ERROR`)
- 413: Payload too large (`ApiErrorCodes.PAYLOAD_TOO_LARGE`)
- 415: Unsupported media type (`ApiErrorCodes.UNSUPPORTED_MEDIA_TYPE`)
- 500: Server error (`ApiErrorCodes.SERVER_ERROR`)

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Image is JPEG/PNG, max 5MB

## Notes
- Only JPEG or PNG images, max 5MB.
- Use `multipart/form-data` for file uploads.
- All responses in JSON.
