import { Stack } from "expo-router";
import { COLORS } from "@/constants";

/**
 * Defines the Expo Router Stack layout for the Products admin section with shared header styling and three routes.
 *
 * The stack applies a white header background, primary header tint, bold title styling, and hides the header shadow. It declares the following screens with their titles and header visibility:
 * - `index`: "Manage Products" (header hidden)
 * - `add`: "Add Product"
 * - `edit/[id]`: "Edit Product"
 *
 * @returns A JSX element: the configured `Stack` containing the `index`, `add`, and `edit/[id]` screens.
 */
export default function ProductsLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#fff" },
                headerTintColor: COLORS.primary,
                headerTitleStyle: { fontWeight: "bold" },
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen name="index" options={{ title: "Manage Products", headerShown: false }} />
            <Stack.Screen name="add" options={{ title: "Add Product" }} />
            <Stack.Screen name="edit/[id]" options={{ title: "Edit Product" }} />
        </Stack>
    );
}
