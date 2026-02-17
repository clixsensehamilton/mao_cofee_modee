# Implementation Plan: 2-mood-input-ui

## Overview
Build a UI for users to input their mood via text or voice. Ensure validation, accessibility, and clear feedback.

## Frameworks & Libraries
- **React** (reuse project setup)
- **TypeScript**
- **React Hook Form** for form state/validation
- **Web Speech API** or **react-speech-recognition** for voice input
- **Toast notifications** (e.g., react-toastify)

## Component Structure
- `MoodInputPage`
  - `MoodTextInput` (text field, validation)
  - `MoodVoiceInput` (mic button, voice-to-text, status)
  - `SubmitButton`
  - `FeedbackMessage` (validation/errors)

## Steps
1. **Text Input**
   - Controlled input with placeholder and label.
   - Validate for non-empty, reasonable length.
2. **Voice Input**
   - Mic button to start/stop recording.
   - Show recording status and transcript.
   - Fallback for unsupported browsers.
3. **Validation & Feedback**
   - Inline error messages for invalid input.
   - Toast or inline feedback on submit.
4. **Accessibility**
   - Proper labels, aria attributes, keyboard navigation.
   - Visible focus states.
5. **Responsive Design**
   - Stack inputs vertically on mobile.

## Design Considerations
- Friendly, inviting UI (emoji, soft colors)
- Clear affordances for voice/text
- Loading/processing indicators

## Deliverables
- Mood input UI with text and voice
- Validation and feedback flows
