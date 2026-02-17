// Shared validation utilities for Mao Coffee Modee
// Use in both frontend and backend for consistent validation logic

import { MoodInputPayload, MenuPhotoUploadPayload, CoffeeSuggestionsRequest, OnboardingPayload, SocialSharePayload, GamificationRequest, ThemeCustomizationPayload, MascotRequest, AccessibilityPreferencesPayload } from './canonicalModels';

export function validateUserId(userId: string): boolean {
  // UUID v4 regex
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(userId);
}

export function validateMoodInput(payload: MoodInputPayload): string[] {
  const errors: string[] = [];
  if (!payload.mood_text || payload.mood_text.length < 1 || payload.mood_text.length > 256) {
    errors.push('mood_text must be 1-256 characters');
  }
  if (payload.mood_voice && typeof payload.mood_voice === 'string') {
    // Check base64 and length (approximate)
    if (!/^([A-Za-z0-9+/=]+)$/.test(payload.mood_voice)) {
      errors.push('mood_voice must be base64');
    }
    // 30s audio at 64kbps ~ 240KB base64
    if (payload.mood_voice.length > 350000) {
      errors.push('mood_voice exceeds 30 seconds');
    }
  }
  if (!validateUserId(payload.user_id)) {
    errors.push('user_id must be a valid UUID v4');
  }
  return errors;
}

export function validateMenuPhotoUpload(payload: MenuPhotoUploadPayload): string[] {
  const errors: string[] = [];
  if (!payload.photo) {
    errors.push('photo is required');
  } else {
    const allowedTypes = ['image/jpeg', 'image/png'];
    // @ts-ignore: File type may not exist in all environments
    if (!allowedTypes.includes(payload.photo.type)) {
      errors.push('photo must be JPEG or PNG');
    }
    // @ts-ignore: File size may not exist in all environments
    if (payload.photo.size > 5 * 1024 * 1024) {
      errors.push('photo must be <= 5MB');
    }
  }
  if (!validateUserId(payload.user_id)) {
    errors.push('user_id must be a valid UUID v4');
  }
  return errors;
}

// Add similar validation for other payloads as needed
