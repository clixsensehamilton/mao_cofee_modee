# Contract: Theme Customization UI

## Data Structures

### Request to Backend
- `userId` (string)
- `theme` (string): Theme identifier

### Response from Backend
- `success` (boolean)
- `theme` (string)
- `error` (string, optional)

## Example Payloads

### Request
```json
{
  "userId": "abc123",
  "theme": "dark"
}
```

### Response (Success)
```json
{
  "success": true,
  "theme": "dark"
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

## Error/Status Codes
- 200: Success
- 400: Bad request
- 404: User not found
- 500: Server error

## Notes
- All requests/responses use JSON.
- UI should persist and apply the selected theme.
