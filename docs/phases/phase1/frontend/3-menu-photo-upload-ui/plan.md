# Implementation Plan: 3-menu-photo-upload-ui

## Overview
Enable users to upload a photo of a menu, with progress, preview, and validation.

## Frameworks & Libraries
- **React**
- **TypeScript**
- **react-dropzone** or native file input
- **react-toastify** for feedback
- **Image preview** (URL.createObjectURL)

## Component Structure
- `MenuPhotoUploadPage`
  - `PhotoDropzone` (drag & drop/file input)
  - `UploadProgressBar`
  - `ImagePreview`
  - `SubmitButton`
  - `ErrorMessage`

## Steps
1. **File Input**
   - Accept image files only (jpg, png, etc).
   - Limit file size (e.g., 5MB max).
2. **Drag & Drop**
   - Highlight drop area on drag.
   - Fallback to file picker.
3. **Preview**
   - Show thumbnail after selection.
   - Option to remove/change image.
4. **Upload Progress**
   - Show progress bar during upload.
   - Handle upload errors.
5. **Validation & Feedback**
   - Show errors for invalid file type/size.
   - Toast or inline error messages.
6. **Accessibility**
   - Keyboard accessible dropzone.
   - ARIA labels for input and feedback.
7. **Responsive Design**
   - Stack elements on mobile, large preview on desktop.

## Design Considerations
- Clear call-to-action
- Friendly error states
- Consistent with brand colors

## Deliverables
- Menu photo upload UI with progress, preview, and validation
