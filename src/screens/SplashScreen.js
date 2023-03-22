import React,{ useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Logo } from '../assets'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout( () => {
            navigation.replace('SplashScreen2');
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.page}>
            <Image source={Logo} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8A0210'
    }, 
})
