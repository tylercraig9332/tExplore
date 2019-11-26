import React from 'react'

import { View, Text } from 'react-native'
import AppStyle from './styles/appStyle'

export default function APD() {
    return (
        <View style={AppStyle.container}>
            <View style={AppStyle.header}>
                <Text style={AppStyle.heading}>Astronomy Photo of the Day</Text>
            </View>
            <View style={AppStyle.body}>
                
            </View>

        </View>
    )
}