// Canonical shared data models and payload types for Mao Coffee Modee
// Used by both frontend and backend for type safety and contract enforcement

// User identifier (UUID v4)
export type UserId = string;

// Mood Input Payload
export interface MoodInputPayload {
  mood_text: string; // 1-256 chars, UTF-8
  mood_voice?: string | null; // Base64 WAV/MP3, max 30s
  user_id: UserId;
}

export interface MoodInputResponse {
  status: 'success' | 'error';
  message: string;
  mood_id?: string;
}

// Menu Photo Upload Payload
export interface MenuPhotoUploadPayload {
  photo: File; // JPEG/PNG, max 5MB
  user_id: UserId;
}

export interface MenuPhotoUploadResponse {
  status: 'success' | 'error';
  message: string;
  menu_id?: string;
}

// Coffee Suggestions Request/Response
export interface CoffeeSuggestionsRequest {
  mood_id: string;
  menu_id: string;
  user_id: UserId;
}

export interface CoffeeSuggestion {
  name: string;
  description: string;
  image_url: string;
}

export interface CoffeeSuggestionsResponse {
  status: 'success' | 'error';
  message: string;
  suggestions?: CoffeeSuggestion[];
}

// Onboarding/Session
export interface OnboardingPayload {
  user_id: UserId;
  device_id?: string;
}

export interface OnboardingResponse {
  status: 'success' | 'error';
  message: string;
  session_id?: string;
}

// Social Sharing
export interface SocialSharePayload {
  userId: UserId;
  mood: string;
  suggestion: string;
  platform: string;
}

export interface SocialShareResponse {
  success: boolean;
  shareUrl?: string;
  error?: string;
}

// Gamification
export interface GamificationRequest {
  userId: UserId;
  action: string;
}

export interface GamificationResponse {
  badges: string[];
  streak: number;
  rewards: Array<{ type: string; value: string | number }>;
}

// Theme Customization
export interface ThemeCustomizationPayload {
  userId: UserId;
  theme: string;
}

export interface ThemeCustomizationResponse {
  success: boolean;
  theme: string;
  error?: string;
}

// Branding/Mascot
export interface MascotRequest {
  userId: UserId;
}

export interface MascotResponse {
  mascot?: {
    name: string;
    imageUrl: string;
    message: string;
  } | null;
  error?: string;
}

// Accessibility Preferences
export interface AccessibilityPreferencesPayload {
  userId: UserId;
  accessibilityPreferences: Record<string, any>;
}

export interface AccessibilityPreferencesResponse {
  status: 'success' | 'error';
  message: string;
}

// Error Codes
export type ApiErrorCode =
  | 'validation_error'
  | 'invalid_request'
  | 'not_found'
  | 'unauthorized'
  | 'unsupported_media_type'
  | 'payload_too_large'
  | 'server_error';
