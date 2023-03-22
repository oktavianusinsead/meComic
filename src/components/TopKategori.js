import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../utils/Fonts'
import { responsiveWidth } from '../utils/Utils'

const TopKategori = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTopKategori}>Top Kategori Hari ini</Text>
            <Text>jgrjihjeroihj jgpej</Text>
        </View>
    )
}

export default TopKategori

const styles = StyleSheet.create({
    container: {
        marginHorizontal: responsiveWidth(20),
        marginTop: 20
    },
    txtTopKategori: {
        color: '#343434',
        fontSize: 14,
        fontFamily: fonts.primary.bold
    }
})
