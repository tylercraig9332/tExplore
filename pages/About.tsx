import React from 'react'
import { View, Text } from 'react-native'

import appStyle from './styles/appStyle'

export default function About() {
    return (
        <View style={appStyle.container}>
           <View style={appStyle.header}>
               <Text style={appStyle.heading}>About</Text>
            </View>
            <View style={appStyle.body}>

            </View>
       </View>
    )
}