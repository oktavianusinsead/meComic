import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { fonts } from '../utils/Fonts'
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth } from '../utils/Utils'
import { IconAccountAktif, Rekomendasi1, Rekomendasi2, Rekomendasi3, Rekomendasi4, Rekomendasi5, Rekomendasi6 } from '../assets';

const data = [
    {
        id: 1,
        image: Rekomendasi1
    },
    {
        id: 2,
        image: Rekomendasi2
    },
    {
        id: 3,
        image: Rekomendasi3
    },
    {
        id: 4,
        image: Rekomendasi4
    },
    {
        id: 5,
        image: Rekomendasi5
    },
    {
        id: 6,
        image: Rekomendasi6
    },
]


const Rekomendasi = () => {
    return (
        <LinearGradient
            colors={['#FF5858', '#3988FF']}
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 2.0 }}
            style={styles.container}
        >
            <View style={{
                // backgroundColor: 'orange', 
                width: responsiveWidth(248),
                height: responsiveHeight(165),
                alignSelf: 'flex-end',
                position: 'absolute',
            }}>
                <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    // showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{marginBottom: responsiveHeight(1), marginLeft: responsiveWidth(1)}}>
                                <Image 
                                    source={item.image}
                                    style={{
                                        width: responsiveWidth(82),
                                        height: responsiveHeight(82)
                                    }}
                                />
                        </View>
                    )}
                />
            </View>
            <View style={styles.wraper}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.text}>Rekomendasi dari</Text>
                    <Text style={styles.text}>meComic</Text>
                </View>
                <View style={styles.btnLihat}>
                    <Text style={styles.text}>Lihat</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Rekomendasi

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: responsiveWidth(375),
        height: responsiveHeight(165),
        justifyContent: 'center'
    },
    wraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: responsiveWidth(20),
        marginRight: responsiveWidth(30)
    },
    btnLihat: {
        backgroundColor: '#1BC875',
        borderRadius: 10,
        paddingVertical: responsiveHeight(9),
        paddingHorizontal: responsiveWidth(37)
    },
    text: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: fonts.primary.bold,
        lineHeight: 20
    },

    // linearGradient: {
    //     // flex: 1,
    //     paddingLeft: 15,
    //     paddingRight: 15,
    //     borderRadius: 5
    // },
    // buttonText: {
    //     fontSize: 18,
    //     fontFamily: 'Gill Sans',
    //     textAlign: 'center',
    //     margin: 10,
    //     color: '#ffffff',
    //     backgroundColor: 'transparent',
    // },
})
