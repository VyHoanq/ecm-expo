import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { dummyUser } from "@/assets/assets";

/**
 * Renders an admin-only tabbed layout with Dashboard, Products, and Orders screens and an Exit action in the header.
 *
 * @returns A React element that is one of: a centered loading indicator while state is loading; `null` if the current user is not an admin; or a configured `Tabs` navigator for admin users including an "Exit" header button.
 */
export default function AdminLayout() {
    const { user } = { user: dummyUser }
    const isLoaded = true;
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && (!user || user.publicMetadata?.role !== "admin")) {
            router.replace("/(tabs)");
        }
    }, [isLoaded, user]);

    if (!isLoaded) {
        return (
            <View className="flex-1 justify-center items-center bg-surface">
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    if (!user || user.publicMetadata?.role !== "admin") return null;

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerShadowVisible: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: "gray",
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => router.replace("/(tabs)")}
                        className="mr-4 flex-row items-center"
                    >
                        <Ionicons name="log-out-outline" size={24} color={COLORS.primary} />
                        <Text className="ml-1 text-primary font-medium">Exit</Text>
                    </TouchableOpacity>
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Dashboard",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="products"
                options={{
                    title: "Products",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cube-outline" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    title: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="receipt-outline" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}
