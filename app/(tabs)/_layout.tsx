import { COLORS } from '@/constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

/**
 * Defines the app's bottom tab navigator with four tabs and a custom-styled tab bar.
 *
 * The navigator registers `index`, `cart`, `favorite`, and `profile` screens and provides per-tab icons that switch between filled and outline variants when focused.
 *
 * @returns A JSX element rendering a Tabs navigator configured with custom tab bar styling, active/inactive tint colors, hidden labels, and the four tab screens with their icons.
 */
export default function Tablayout() {

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: '#F0F0F0',
                height: 56,
                paddingTop: 6,
            }
        }}>
            <Tabs.Screen name='index' options={{
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={26} color={color} />
            }} />
            <Tabs.Screen name='cart' options={{
                tabBarIcon: ({ color, focused }) => <Feather name={focused ? 'shopping-cart' : 'shopping-cart'} size={26} color={color} />
            }} />
            <Tabs.Screen name='favorite' options={{
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'heart' : 'heart-outline'} size={26} color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={26} color={color} />
            }} />
        </Tabs>
    )
}