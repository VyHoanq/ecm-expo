import { COLORS } from '@/constants'
import { ProductCardProps } from '@/constants/types'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

/**
 * Renders a tappable product card that links to the product detail route.
 *
 * @param product - Product data used to populate the card. Expected fields used: `_id` (for link), `images[0]` (display image), `isFeatured` (badge), `name`, and `price`.
 * @returns The JSX element representing the product card.
 */
export default function ProductCard({ product }: ProductCardProps) {
    const isLiked = false; // This should come from product data, using a placeholder for now
    return (
        <Link href={`/product/${product._id}`} asChild>
            <TouchableOpacity className='w-[48%] mb-4 bg-white rounded-lg overflow-hidden'>
                <View className='relative h-56 w-full bg-gray-100'>
                    <Image source={{ uri: product.images[0] }} className='w-full h-full' resizeMode='cover' />

                    {/* Favorite icon */}
                    <TouchableOpacity className='absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-sm' onPress={(e) => { e.stopPropagation(); /* Handle like toggle here */ }}>
                        <Ionicons name={isLiked ? 'heart' : 'heart-outline'} size={20} color={isLiked ? COLORS.accent : COLORS.primary} />
                    </TouchableOpacity>

                    {/* is Featured */}
                    {product.isFeatured && (
                        <View className='absolute top-2 left-2 bg-black px-2 py-1 rounded'>
                            <Text className='text-white text-xs font-bold uppercase'>Featured</Text>
                        </View>
                    )}
                </View>

                {/* Product Info */}
                <View className='p-3'>
                    <View className='flex-row items-center mb-1'>
                        <Ionicons name="star" size={14} color='#FFD700' />
                        <Text className='text-secondary text-sm ml-1'>4.6</Text>
                    </View>
                    <Text className='text-primary font-medium text-sm mb-1' numberOfLines={1}>{product.name}</Text>
                    <View className='flex-row items-center'>
                        <Text className='text-primary font-bold text-base'>${product.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}