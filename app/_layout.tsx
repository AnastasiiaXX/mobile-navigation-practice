// app/layout.tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="languages" options={{ title: 'Languages and experience' }} />
    </Tabs>
  );
}
