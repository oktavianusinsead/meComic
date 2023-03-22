import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowLeft, IconNext } from '../../assets'
import { responsiveHeight, responsiveWidth } from '../../utils/Utils'

const Tombol = ({ label, type, onPress }) => {

    if (type === "next") {
        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={{marginRight: 5}}>{label}</Text>
                <Image source={IconNext} />
            </TouchableOpacity>
        )
    } else if (type === "selesai") {
        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={{marginRight: 5}}>{label}</Text>
                {/* <Image source={IconNext} /> */}
            </TouchableOpacity>
        )
    } 
    
    else {
        return (
            <View>
                <Text>{label}</Text>
            </View>
        )
    }
}

export default Tombol

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FFFFFF',
        marginBottom: responsiveHeight(45),
        // width: responsiveWidth(124),
        paddingVertical: responsiveHeight(8),
        paddingHorizontal: responsiveWidth(19),
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute'
    }
})
