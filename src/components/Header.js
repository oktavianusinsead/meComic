import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconSearch } from '../assets'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const Header = ({ title, icon }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{title}</Text>
            <View>
                <Image source={IconSearch} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(20),
        marginHorizontal: responsiveWidth(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    txtTitle: {
        fontSize: 18,
        fontFamily: fonts.primary.bold
    }
})
