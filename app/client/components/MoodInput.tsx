import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';
// For web, you may want to use a different voice input library
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


interface MoodInputProps {
  onSubmit: (moodText: string, moodVoice?: string) => void;
  loading?: boolean;
  error?: string;
}

export const MoodInput: React.FC<MoodInputProps> = ({ onSubmit, loading, error }) => {
  const [moodText, setMoodText] = useState('');
  const [recording, setRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [inputY] = useState(new Animated.Value(0));
  const theme = useColorScheme() ?? 'light';

  // Placeholder for voice input logic
  const handleVoiceInput = () => {
    setRecording(!recording);
    if (!recording) {
      setVoiceTranscript('Feeling happy!'); // Simulate transcript
    } else {
      setVoiceTranscript('');
    }
  };

  const handleSubmit = () => {
    if (!moodText && !voiceTranscript) return;
    setMessages([...messages, { text: moodText || voiceTranscript, isUser: true }]);
    onSubmit(moodText, voiceTranscript);
    setMoodText('');
    setVoiceTranscript('');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.outer, { backgroundColor: Colors[theme].background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <View style={styles.chatContainer}>
        {messages.map((msg, idx) => (
          <View
            key={idx}
            style={msg.isUser
              ? [styles.userBubble, { backgroundColor: Colors[theme].tint }]
              : [styles.botBubble, { backgroundColor: Colors[theme].surface }]}
            accessible
            accessibilityLabel={msg.isUser ? 'Your message' : 'Bot message'}
          >
            <Text style={msg.isUser ? [styles.userText, { color: '#fff' }] : [styles.botText, { color: Colors[theme].text }]}>{msg.text}</Text>
          </View>
        ))}
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
      <View style={[styles.inputBar, { backgroundColor: Colors[theme].surface, borderColor: Colors[theme].border }] }>
        <TouchableOpacity
          style={[styles.voiceButton, recording && styles.voiceButtonActive, { backgroundColor: recording ? Colors[theme].accent : Colors[theme].border }]}
          onPress={handleVoiceInput}
          accessibilityLabel="Record mood with voice"
          accessible
        >
          <Text style={[styles.voiceButtonText, { color: Colors[theme].tint }]}>{recording ? '🎤 Stop' : '🎤 Voice'}</Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, { backgroundColor: Colors[theme].background, color: Colors[theme].text, borderColor: Colors[theme].border }]}
          placeholder="Type your mood..."
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#7ba2d6'}
          value={moodText}
          onChangeText={setMoodText}
          accessible
          accessibilityLabel="Mood text input"
          maxLength={256}
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity
          style={[styles.sendButton, { backgroundColor: Colors[theme].tint }]}
          onPress={handleSubmit}
          disabled={loading || (!moodText && !voiceTranscript)}
          accessibilityLabel="Send mood"
          accessible
        >
          <Text style={styles.sendButtonText}>{loading ? '...' : '➤'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  chatContainer: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'flex-end',
  },
  userBubble: {
    alignSelf: 'flex-end',
    borderRadius: 18,
    padding: 12,
    marginBottom: 8,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  botBubble: {
    alignSelf: 'flex-start',
    borderRadius: 18,
    padding: 12,
    marginBottom: 8,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  userText: {
    fontSize: 16,
  },
  botText: {
    fontSize: 16,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderRadius: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    fontSize: 16,
    marginHorizontal: 8,
  },
  voiceButton: {
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
  },
  voiceButtonActive: {},
  voiceButtonText: {
    fontSize: 18,
  },
  sendButton: {
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    marginLeft: 4,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 8,
    alignSelf: 'center',
  },
});
