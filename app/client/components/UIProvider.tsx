import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config';

export function UIProvider({ children }: { children: React.ReactNode }) {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {children}
    </TamaguiProvider>
  );
}
