import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeType = 'light' | 'dark';
interface SidebarSettingsWebProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeToggle: () => void;
  theme: ThemeType;
}

// SVG icons for web
export const MenuIcon = ({ color = '#888', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="2.5" rx="1.25" fill={color}/>
    <rect x="3" y="11" width="18" height="2.5" rx="1.25" fill={color}/>
    <rect x="3" y="16" width="18" height="2.5" rx="1.25" fill={color}/>
  </svg>
);

export function SidebarSettingsWeb({ isOpen, onClose, onThemeToggle, theme }: SidebarSettingsWebProps) {
  // Ensure theme is typed
  const themeKey: ThemeType = theme === 'dark' ? 'dark' : 'light';
  return (
    <div
      aria-modal={isOpen}
      aria-label="Settings sidebar"
      style={{
        position: 'fixed',
        top: 0,
        left: isOpen ? 0 : -340,
        width: 320,
        height: '100vh',
        background: Colors[themeKey].surface,
        borderRight: `1.5px solid ${Colors[themeKey].border}`,
        boxShadow: '2px 0 16px rgba(0,0,0,0.08)',
        zIndex: 100,
        transition: 'left 0.32s cubic-bezier(.4,0,.2,1)',
        padding: '40px 28px 24px 28px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button
        aria-label="Close settings"
        style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={onClose}
      >
        <span style={{ fontSize: 28, color: Colors[themeKey].text }}>×</span>
      </button>
      <div style={{ marginTop: 48, marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 22, color: Colors[themeKey].tint, marginRight: 8 }}>🎨</span>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#444' }}>Theme</span>
        </div>
        <button
          style={{
            borderRadius: 18,
            padding: '10px 24px',
            background: Colors[themeKey].accent,
            color: '#fff',
            fontSize: 16,
            fontWeight: 500,
            border: 'none',
            marginTop: 4,
            cursor: 'pointer',
          }}
          onClick={onThemeToggle}
          aria-label="Toggle dark/light mode"
        >
          {themeKey === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      {/* Future extensibility: add more settings sections here */}
    </div>
  );
}
