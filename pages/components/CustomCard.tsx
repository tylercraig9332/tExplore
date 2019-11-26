import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

export default function CustomCard(props) : JSX.Element {

    React.useEffect(() => {
        
    }, [])

    return (
        <Card>
            <CardItem button onPress={props.onPress} cardBody>
                <Image source={props.img} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem button onPress={props.onPress} footer><Text style={{color: 'steelblue'}}>{props.value}</Text></CardItem>
        </Card>
    )
}