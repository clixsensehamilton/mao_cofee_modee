# Contract: Branding/Mascot UI

## Data Structures

### Request to Backend
- `userId` (string)

### Response from Backend
- `mascot` (object, optional)
  - `name` (string)
  - `imageUrl` (string)
  - `message` (string)
- `error` (string, optional)

## Example Payloads

### Request
```json
{
  "userId": "abc123"
}
```

### Response (With Mascot)
```json
{
  "mascot": {
    "name": "Beanie",
    "imageUrl": "https://cdn.example.com/mascot.png",
    "message": "Welcome back!"
  }
}
```

### Response (No Mascot)
```json
{
  "mascot": null,
  "error": "Mascot not available"
}
```

## Error/Status Codes
- 200: Success
- 404: Mascot not found
- 500: Server error

## Notes
- All requests/responses use JSON.
- UI should handle missing mascot data gracefully.
