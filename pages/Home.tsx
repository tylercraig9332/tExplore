import React from 'react'
import {View, ScrollView, Text} from 'react-native'

import Card from './components/CustomCard'
import appStyle from './styles/appStyle'

export default function Home(props) {
    return (
       <View style={appStyle.container}>
           <View style={appStyle.header}>
               <Text style={appStyle.heading}>Home</Text>
            </View>
            <View style={appStyle.body}>
                <ScrollView>
                    <Card 
                        value="Astronomy Picture of the Day" 
                        img={{uri: 'https://apod.nasa.gov/apod/image/1911/ngc5907_gabany_rcl.jpg'}}
                        onPress={() => props.navigation.navigate('APD')}/>
                    <Card
                        value="Earth Polychromatic Imaging Camera"
                        img={{uri: "https://epic.gsfc.nasa.gov/archive/natural/2019/06/27/png/epic_1b_20190627120836.png"}}
                        onPress={() => props.navigation.navigate('EPIC')}/>
                </ScrollView>
            </View>
       </View>
    )
}