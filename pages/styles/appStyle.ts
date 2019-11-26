import { StyleSheet } from 'react-native'

const main = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        borderBottomColor: 'steelblue',
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    heading: {
        fontSize: 24,
        color: 'steelblue',
        fontWeight: 'bold'
    },
    body: {
        flex: 7
    }
})

export default main