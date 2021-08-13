import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function GoHome() {
    const navigation = useNavigation()
    navigation.navigate('Home')

    return ( null )
}
