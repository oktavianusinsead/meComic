import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Money } from '../assets'
import { colors } from '../utils/Color'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const data = [
    {
        jmlKoin: '100.000',
        icon: Money
    },
]

const AccountScreen = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.txtHalo}>Halo!</Text>
            </View>
            <View style={styles.container}>
                {data.map((item, index) => (
                    <View key={index} style={styles.jmlKoin}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={item.icon} style={styles.koin}/>
                            <Text style={styles.txtJmlKoin}>{item.jmlKoin}</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("IsiKoin", {item})}
                                style={styles.btnIsiKoin}
                            >
                                <Text style={styles.txtBtn}>Isi Koin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary
    },
    header: {
        marginHorizontal: responsiveWidth(20),
        marginTop: responsiveHeight(20)
    },
    txtHalo: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        lineHeight: 20,
        letterSpacing: 1,
        color: '#000000'
    },
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: responsiveHeight(25),
        borderRadius: 8,
        marginHorizontal: responsiveWidth(20),
        paddingVertical: responsiveHeight(35),
        paddingHorizontal: responsiveWidth(20),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    koin: {
        width: responsiveWidth(26),
        height: responsiveWidth(26)
    },  
    jmlKoin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: responsiveHeight(30)
    },
    txtJmlKoin: {
        fontSize: 22,
        fontFamily: fonts.primary.bold,
        left: responsiveWidth(8)
    },
    btnIsiKoin: {
        alignItems: 'center',
        backgroundColor: '#1BE383',
        borderRadius: 6,
        paddingVertical: responsiveHeight(6),
        paddingHorizontal: responsiveWidth(24)
    },
    txtBtn: {
        fontSize: 14, 
        color: '#FFFFFF'
    }
})
