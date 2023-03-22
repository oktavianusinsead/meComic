import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Koin1, Koin2, Money } from '../assets'
import { colors } from '../utils/Color'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const data = [
    {
        icon: Money,
        jmlKoin: '100',
        uang: '16.000'
    },
    {
        icon: Koin1,
        jmlKoin: '250',
        uang: '35.000'
    },
    {
        icon: Koin2,
        jmlKoin: '1000',
        uang: '50.000'
    },
]

const IsiKoin = ({ route }) => {

    const dtParamKoin = route.params

    return (
        <View style={styles.pages}>
            <View style={styles.viewJmlKoin}>
                <Image source={dtParamKoin.item.icon} style={styles.iconImg}/>
                <Text style={styles.txtJmlKoin}>{dtParamKoin.item.jmlKoin}</Text>
            </View>
            <View style={{marginHorizontal: responsiveWidth(20)}}>
                {data.map((itm, idx) => (
                    <View key={idx} style={styles.viewKoin}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={itm.icon} style={styles.koin}/>
                            <Text style={{left: responsiveWidth(8)}}>{itm.jmlKoin} Koin</Text>
                        </View>
                        <View style={styles.btnIsiKoin}>
                            <Text>Rp {itm.uang}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default IsiKoin

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        // backgroundColor: colors.primary
    },
    viewJmlKoin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(20),
        marginHorizontal: responsiveWidth(20),
        padding: responsiveHeight(40),
    },
    txtJmlKoin: {
        fontSize: 22,
        fontFamily: fonts.primary.bold,
        left: 7
    },
    iconImg: {
        width: responsiveWidth(26),
        height: responsiveWidth(26)
    },
    btnIsiKoin: {
        alignItems: 'center',
        backgroundColor: '#1BE383',
        borderRadius: 6,
        paddingVertical: responsiveHeight(6),
        paddingHorizontal: responsiveWidth(24)
    },
    viewKoin: {
        backgroundColor: '#FFFFFF',
        marginTop: responsiveHeight(20),
        borderRadius: 8,
        paddingVertical: responsiveHeight(16),
        paddingHorizontal: responsiveWidth(10),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    koin: {
        width: responsiveWidth(26),
        height: responsiveWidth(26)
    }, 
})
