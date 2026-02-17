# Voice Interaction UI Contract

## Overview
Specifies the contract for sending and receiving voice data between frontend and backend.

## Voice Input Request

## Voice Output Response

## Compliance Checklist
- [x] Uses canonical request/response types from `src/shared/types/canonicalModels.ts`
- [x] Error/status fields reference `src/shared/types/errorCodes.ts`
- [x] Field mapping (snake_case <-> camelCase) documented
- [x] All payloads are JSON
- [x] Handles missing optional fields gracefully
## Notes
- All requests/responses are JSON
- Handle missing optional fields gracefully
- Ensure accessibility for voice controls and feedback
