import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import '@/global.css';
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


/**
 * Root navigation layout for the app.
 *
 * @returns A Stack navigator element configured with headers hidden across all screens.
 */
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
        <WishlistProvider>
          <Stack screenOptions={{ headerShown: false }} />;
        </WishlistProvider>
      </CartProvider>
    </GestureHandlerRootView>
  )

}
