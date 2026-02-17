# Frontend-Backend Contract: Coffee Suggestions

## Request Schema (Frontend → Backend)
- **Endpoint:** `/api/coffee-suggestions`
- **Method:** POST
- **Content-Type:** `application/json`

### Fields
| Field      | Type   | Required | Description                | Validation                |
|------------|--------|----------|----------------------------|---------------------------|
| mood_id    | string | Yes      | Reference to mood entry    | UUID or string            |
| menu_id    | string | Yes      | Reference to menu entry    | UUID or string            |
| user_id    | string | Yes      | Unique user identifier     | UUID v4                   |

### Example Request
```json
{
  "mood_id": "mood-123456",
  "menu_id": "menu-987654",
  "user_id": "b1c2d3e4-f5a6-7890-abcd-ef1234567890"
}
```

## Response Schema (Backend → Frontend)
- **Content-Type:** `application/json`

### Fields
| Field         | Type     | Description                        |
|---------------|----------|------------------------------------|
| status        | string   | "success" or "error"              |
| message       | string   | Info or error message              |
| suggestions   | array    | List of coffee suggestion objects  |

#### Suggestion Object
| Field      | Type   | Description                |
|------------|--------|----------------------------|
| name       | string | Coffee name                |
| description| string | Description of the coffee  |
| image_url  | string | URL to coffee image        |

### Example Response (Success)
```json
{
  "status": "success",
  "message": "Suggestions ready.",
  "suggestions": [
    {
      "name": "Espresso",
      "description": "Strong and bold.",
      "image_url": "https://example.com/espresso.jpg"
    },
    {
      "name": "Latte",
      "description": "Smooth and milky.",
      "image_url": "https://example.com/latte.jpg"
    }
  ]
}
```

### Example Response (Error)
```json
{
  "status": "error",
  "message": "No suggestions available."
}
```


## Canonical Types Reference
- Request/Response types: See `src/shared/types/canonicalModels.ts`
- Error codes: See `src/shared/types/errorCodes.ts`

## Field Mapping (snake_case <-> camelCase)
| API Field (snake_case) | Canonical Type (camelCase) |
|-----------------------|----------------------------|
| mood_id               | moodId                     |
| menu_id               | menuId                     |
| user_id               | userId                     |
| suggestions           | suggestions                |
| image_url             | imageUrl                   |

## Error/Status Codes (Canonical)
- 200: Success (`status: 'success'`)
- 400: Validation error (`ApiErrorCodes.VALIDATION_ERROR`)
- 404: Not found (`ApiErrorCodes.NOT_FOUND`)
- 500: Server error (`ApiErrorCodes.SERVER_ERROR`)

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Image URLs are HTTPS

## Notes
- All payloads in JSON.
- Image URLs must be HTTPS.
