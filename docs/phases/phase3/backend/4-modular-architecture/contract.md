# Contract: Branding/Mascot Backend

## Data Structures

### Request: Get Mascot Data
- `userId` (string, required)

### Response: Mascot Data
- `mascot` (object, optional):
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
- All payloads are JSON.
- Mascot data is optional and may be null.
