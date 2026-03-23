import '@/global.css';
import { Stack } from "expo-router";


/**
 * Root navigation layout for the app.
 *
 * @returns A Stack navigator element configured with headers hidden across all screens.
 */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
