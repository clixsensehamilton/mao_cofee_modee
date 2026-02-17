# User Flow & Onboarding API Implementation Plan

## Overview
Implement endpoints for user onboarding, registration, and session management.

## Frameworks & Libraries
- **Fastify** (API framework)
- **TypeScript**
- **Prisma** (ORM for PostgreSQL)
- **Zod** (validation)
- **bcrypt** (password hashing, if needed)
- **fastify-jwt** (JWT authentication)
- **fastify-cookie** (session management, optional)

## API Design
- **POST /api/register**
  - Accepts: JSON
  - Body: `email`, `password`, `name`
  - Response: 201 Created, user record (no password)
- **POST /api/login**
  - Accepts: JSON
  - Body: `email`, `password`
  - Response: 200 OK, JWT token
- **GET /api/session**
  - Auth required
  - Response: user info

## Data Storage
- **Table:** `User`
  - `id` (UUID)
  - `email` (unique)
  - `passwordHash` (string)
  - `name` (string)
  - `createdAt` (timestamp)

## Validation
- Use Zod for all fields
- Enforce strong password policy
- Check for existing email on registration

## Security Considerations
- Hash passwords with bcrypt
- Use JWT for authentication
- Store JWT in HTTP-only cookies (optional)
- Rate limit login attempts
- Never return password hashes
- Validate all input

## Steps
1. Define Prisma model for `User`
2. Create Fastify routes/controllers for register, login, session
3. Add Zod validation
4. Hash passwords with bcrypt
5. Issue JWT on login
6. Protect session endpoint
7. Add tests for endpoints

## References
- [Fastify JWT](https://github.com/fastify/fastify-jwt)
- [Prisma Docs](https://www.prisma.io/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
