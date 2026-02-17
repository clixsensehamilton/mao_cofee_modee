# Menu Photo Upload API Implementation Plan

## Overview
Implement an endpoint for users to upload menu photos, validate and store images, and (optionally) analyze them.

## Frameworks & Libraries
- **Fastify** (API framework)
- **TypeScript**
- **Prisma** (ORM for PostgreSQL)
- **fastify-multipart** (file upload)
- **sharp** (image processing/validation)
- **Optional:** cloud storage SDK (S3, GCS)
- **Optional:** image analysis (Tesseract.js for OCR, or AI API)

## API Design
- **POST /api/menu-photo**
  - Accepts: multipart/form-data
  - Body:
    - `photo` (image file, required)
    - `userId` (string, required)
- **Response:**
  - 201 Created, returns stored photo record (and analysis result if available)

## Data Storage
- **Table:** `MenuPhoto`
  - `id` (UUID)
  - `userId` (FK)
  - `photoPath` (string, file path or URL)
  - `analysisResult` (JSON, nullable)
  - `createdAt` (timestamp)

## Validation
- Use Zod for `userId`
- Validate file:
  - Type: image/jpeg, image/png
  - Size: max 10MB
  - Use sharp to check/resize image

## File Handling
- Store images outside web root (or in S3/GCS)
- Generate unique filenames
- Optionally, create thumbnails

## Image Analysis (Optional)
- Use Tesseract.js or external AI API to extract menu items
- Store analysis result in DB

## Security Considerations
- Authenticate user (JWT/session)
- Validate all input
- Limit file size/type
- Sanitize file names
- Never expose raw file paths

## Steps
1. Define Prisma model for `MenuPhoto`
2. Create Fastify route/controller for `/api/menu-photo`
3. Add Zod validation for `userId`
4. Handle file upload, validate with sharp
5. Store file and DB record
6. (Optional) Analyze image, store result
7. Return created record
8. Add tests for endpoint

## References
- [Fastify Multipart](https://github.com/fastify/fastify-multipart)
- [Sharp Docs](https://sharp.pixelplumbing.com/)
- [Tesseract.js](https://tesseract.projectnaptha.com/)
