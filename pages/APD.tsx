import React, {useState, useEffect} from 'react'
import AUTH from '../auth.json'

import { View, Text, Image } from 'react-native'
import AppStyle from './styles/appStyle'

type ResObj = {
    copyright : String,
    date : String,
    explanation : String,
    url: any,
    title : String,
    hdurl : any,
    media_type: String, // TODO: Change to what strings "image"
    service_version : String
}

export default function APD() {

    const [resObj, setResObj] = useState<ResObj | undefined>()

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${AUTH.nasa}`).then(res => {
            if (res.status !== 200) {
                console.error('an error has occurred')
            }
            res.json().then(val => {
                console.log(val)
                setResObj(val)
            })
        })
    }, [])

    if (resObj === undefined) return <View><Text>Loading Data...</Text></View>
    return (
        <View style={AppStyle.container}>
            <View style={AppStyle.header}>
                <Text style={AppStyle.heading}>Astronomy Photo of the Day</Text>
            </View>
            <View style={AppStyle.body}>
                <Image source={{uri: resObj.url}} style={{height: 200, width: null, flex: 1}}/>
                <Text style={AppStyle.heading}>{resObj.title}</Text>
                <Text>{resObj.explanation}</Text>
            </View>
        </View>
    )
}