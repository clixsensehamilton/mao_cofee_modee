
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

interface MoodInputWebProps {
  onSubmit: (moodText: string, moodVoice?: string) => void;
  loading?: boolean;
  error?: string;
}

const MicIcon = ({ color = '#888', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="3" width="6" height="10" rx="3" fill={color}/>
    <rect x="7" y="13" width="10" height="2" rx="1" fill={color} fillOpacity="0.5"/>
    <rect x="11" y="17" width="2" height="3" rx="1" fill={color}/>
  </svg>
);
const SendIcon = ({ color = '#fff', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20L21 12L3 4V10L17 12L3 14V20Z" fill={color}/>
  </svg>
);

import { YStack, XStack, Text, Button, Input, Theme } from 'tamagui';

export function MoodInput({ onSubmit, loading, error }: MoodInputWebProps) {
  const [theme, setTheme] = useState(useColorScheme() ?? 'light');
  const [moodText, setMoodText] = useState('');
  const [recording, setRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);

  const handleVoiceInput = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setRecording(!recording);
    if (!recording) {
      setVoiceTranscript('Feeling happy!'); // Simulate transcript
    } else {
      setVoiceTranscript('');
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!moodText && !voiceTranscript) return;
    setMessages([...messages, { text: moodText || voiceTranscript, isUser: true }]);
    onSubmit(moodText, voiceTranscript);
    setMoodText('');
    setVoiceTranscript('');
  };

  // Modern, integrated chat UI with Tamagui components
  return (
    <Theme name={theme}>
      <YStack flex={1} height="100vh" width="100vw" alignItems="center" justifyContent="center" backgroundColor="$background">
        {/* Chat area with more padding, max width, and subtle shadow */}
        <YStack width="100%" maxWidth={520} minHeight="48vh" maxHeight="70vh" padding={32} overflow="auto" justifyContent="flex-end" margin="0 auto" backgroundColor="$backgroundStrong" borderRadius={28} elevation="$4">
          {messages.map((msg, idx) => (
            <XStack
              key={idx}
              alignItems="flex-end"
              justifyContent={msg.isUser ? 'flex-end' : 'flex-start'}
              marginBottom={14}
            >
              <YStack
                backgroundColor={msg.isUser ? '$accent' : '$backgroundStrong'}
                paddingHorizontal={20}
                paddingVertical={16}
                borderRadius={msg.isUser ? [20, 20, 4, 20] : [20, 20, 20, 4]}
                maxWidth="75%"
                elevation={msg.isUser ? '$2' : '$1'}
              >
                <Text color={msg.isUser ? '#fff' : '$color'} fontSize={17} fontWeight="400" lineHeight={24}>
                  {msg.text}
                </Text>
              </YStack>
            </XStack>
          ))}
          {/* Error message */}
          {error && (
            <Text color="$red10" marginTop={8} fontSize={15}>{error}</Text>
          )}
          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            style={{ width: '100%', maxWidth: 520, display: 'flex', alignItems: 'center', gap: 12, margin: '24px auto 0 auto', background: 'none', border: 'none' }}
          >
            <Button
              type="button"
              aria-label={recording ? 'Stop recording' : 'Start voice input'}
              onPress={handleVoiceInput}
              theme={recording ? 'active' : undefined}
              circular
              marginRight={4}
              icon={<MicIcon color={recording ? '#fff' : '#888'} />}
            />
            <Input
              value={moodText}
              onChangeText={setMoodText}
              placeholder="Type your mood..."
              flex={1}
              fontSize={17}
              paddingHorizontal={18}
              paddingVertical={12}
              borderRadius={16}
              borderWidth={1.5}
                            borderColor="$borderColor"
                            backgroundColor="$backgroundStrong"
                            color="$color"
                            aria-label="Mood input"
                            marginRight={4}
                          />
                          <Button
                            type="submit"
                            aria-label="Send mood"
                            disabled={loading}
                            theme="active"
                            circular
                            marginLeft={4}
                            icon={<SendIcon color="#fff" />}
                          />
                        </form>
                      </YStack>
                    </YStack>
                  </Theme>
                );
              }
