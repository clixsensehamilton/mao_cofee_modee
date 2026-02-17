import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Easing, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

interface SidebarSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeToggle: () => void;
  theme: 'light' | 'dark';
}

export const SidebarSettings: React.FC<SidebarSettingsProps> = ({ isOpen, onClose, onThemeToggle, theme }) => {
  const [slideAnim] = useState(new Animated.Value(isOpen ? 0 : -320));

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : -320,
      duration: 320,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          left: slideAnim,
          backgroundColor: Colors[theme].surface,
          borderColor: Colors[theme].border,
        },
      ]}
      accessibilityViewIsModal={isOpen}
      accessible={isOpen}
      accessibilityLabel="Settings sidebar"
    >
      <TouchableOpacity style={styles.closeBtn} onPress={onClose} accessibilityLabel="Close settings">
        <Ionicons name="close" size={28} color={Colors[theme].text} />
      </TouchableOpacity>
      <View style={styles.section}>
        <View style={styles.sectionHeader}><Ionicons name="color-palette" size={22} color={Colors[theme].tint} /><View style={{ width: 8 }} /><Text style={styles.sectionTitle}>Theme</Text></View>
        <TouchableOpacity
          style={[styles.toggleBtn, { backgroundColor: Colors[theme].accent }]}
          onPress={onThemeToggle}
          accessibilityLabel="Toggle dark/light mode"
        >
          <Text style={styles.toggleBtnText}>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</Text>
        </TouchableOpacity>
      </View>
      {/* Future extensibility: add more settings sections here */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 320,
    zIndex: 100,
    borderRightWidth: 1.5,
    paddingTop: Platform.OS === 'web' ? 32 : 48,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 2,
  },
  section: {
    marginTop: 48,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  toggleBtn: {
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  toggleBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});

import { Text } from './Themed';
