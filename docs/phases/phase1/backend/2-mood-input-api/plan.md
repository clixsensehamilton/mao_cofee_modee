# Mood Input API Implementation Plan

## Overview
Implement an endpoint to accept user mood input (text and voice), validate, and store it securely.

## Frameworks & Libraries
- **Fastify** (API framework)
- **TypeScript**
- **Prisma** (ORM for PostgreSQL)
- **Zod** (validation)
- **Multer** or **fastify-multipart** (for voice file uploads)
- **ffmpeg** (optional, for audio processing)

## API Design
- **POST /api/mood**
  - Accepts: JSON (text mood) or multipart/form-data (voice file)
  - Body:
    - `moodText` (string, optional)
    - `moodVoice` (audio file, optional)
    - `userId` (string, required)
- **Response:**
  - 201 Created, returns stored mood record

## Data Storage
- **Table:** `MoodInput`
  - `id` (UUID)
  - `userId` (FK)
  - `moodText` (nullable string)
  - `moodVoicePath` (nullable string, file path)
  - `createdAt` (timestamp)

## Validation
- Use Zod to ensure:
  - At least one of `moodText` or `moodVoice` is present
  - `userId` is valid UUID
  - If file, check type (audio/*), size limit (e.g., 5MB)

## Security Considerations
- Authenticate user (JWT or session, if available)
- Sanitize all input
- Store files outside web root, generate unique filenames
- Limit file size and type
- Validate all fields

## Steps
1. Define Prisma model for `MoodInput`
2. Create Fastify route/controller for `/api/mood`
3. Add Zod validation schema
4. Handle file upload (voice)
5. Store record in DB
6. Return created record
7. Add tests for endpoint

## References
- [Fastify File Upload](https://github.com/fastify/fastify-multipart)
- [Zod Validation](https://zod.dev/)
- [Prisma Docs](https://www.prisma.io/docs/)
