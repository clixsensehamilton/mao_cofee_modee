import { useState } from 'react';
import { MoodInput } from '@/components/MoodInput';
import { SidebarSettingsWeb, MenuIcon } from '@/components/SidebarSettings.web';
import { useColorScheme } from '@/components/useColorScheme';

export default function ChatScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(useColorScheme() ?? 'light');

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Sidebar menu icon */}
      <button
        aria-label="Open settings sidebar"
        style={{
          position: 'fixed',
          top: 24,
          left: 24,
          zIndex: 101,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        onClick={() => setSidebarOpen(true)}
      >
        <MenuIcon color={theme === 'dark' ? '#fff' : '#222'} />
      </button>
      {/* Sidebar settings */}
      <SidebarSettingsWeb
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        theme={theme}
      />
      {/* Main chat UI, pass theme as prop if needed */}
      <MoodInput onSubmit={() => {}} />
    </div>
  );
}
