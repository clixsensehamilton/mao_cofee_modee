# Coffee Suggestion Logic Implementation Plan

## Overview
Implement the logic to suggest coffee options based on user mood and menu data, with AI integration or a stub for future AI.

## Frameworks & Libraries
- **Fastify** (API framework)
- **TypeScript**
- **Prisma** (ORM for PostgreSQL)
- **Zod** (validation)
- **Optional:** OpenAI SDK or similar (for AI integration)

## API Design
- **POST /api/coffee-suggestion**
  - Accepts: JSON
  - Body:
    - `userId` (string, required)
    - `moodInputId` (string, required)
    - `menuPhotoId` (string, required)
- **Response:**
  - 200 OK, returns coffee suggestion(s) and rationale

## Logic
- Fetch mood and menu data from DB
- (Stub) Use simple rules to suggest coffee (e.g., mood: "tired" → espresso)
- (Future) Integrate with AI API for advanced suggestions
- Return structured response:
  - `suggestions`: array of coffee items
  - `reasoning`: string

## Data Storage
- **Table:** `CoffeeSuggestion`
  - `id` (UUID)
  - `userId` (FK)
  - `moodInputId` (FK)
  - `menuPhotoId` (FK)
  - `suggestions` (JSON)
  - `reasoning` (string)
  - `createdAt` (timestamp)

## Validation
- Use Zod to validate all IDs
- Ensure referenced records exist

## Security Considerations
- Authenticate user (JWT/session)
- Validate all input
- Never expose internal logic details

## Steps
1. Define Prisma model for `CoffeeSuggestion`
2. Create Fastify route/controller for `/api/coffee-suggestion`
3. Add Zod validation
4. Implement stub logic (simple rules)
5. (Future) Integrate AI API
6. Store suggestion in DB
7. Return structured response
8. Add tests for endpoint

## References
- [OpenAI Node SDK](https://www.npmjs.com/package/openai)
- [Prisma Docs](https://www.prisma.io/docs/)
