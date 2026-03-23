import { COLORS } from '@/constants'
import { CategoryItemProps } from '@/constants/types'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

/**
 * Render a tappable category tile showing an icon and label.
 *
 * Renders a touchable element that displays a circular icon above a text label; visual styling (background, icon color, and text color) changes based on selection state.
 *
 * @param item - Category data containing at least `name` and `icon`
 * @param isSelected - Whether this category is currently selected
 * @param onPress - Callback invoked when the tile is pressed
 * @returns The touchable category element with icon and label
 */
export default function CategoryItem({ item, isSelected, onPress }: CategoryItemProps) {
    return (
        <TouchableOpacity onPress={onPress} className='mr-4 items-center'>
            <View className={`w-14 h-14 rounded-full items-center justify-center mb-2 ${isSelected ? 'bg-white' : 'bg-surface'}`}>
                <Ionicons name={item.icon as any} size={24} color={isSelected ? '#FFF' : COLORS.primary} />
            </View>
            <Text className={`text-xs font-medium ${isSelected ? "text-primary" : "text-secondary"}`}>{item.name}</Text>
        </TouchableOpacity>
    )
}