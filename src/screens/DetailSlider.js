import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Download, Favorite, IconArrowLeft, IconArrowRight, IconStart, Share } from '../assets'
import { Episode1, Episode2, Episode3, Episode4, Episode5, Episode6 } from '../assets/episode'
import { colors } from '../utils/Color'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const episode = [
    {
        images: Episode1,
        title: "Episode 1",
    },
    {
        images: Episode2,
        title: "Episode 2",
    },
    {
        images: Episode3,
        title: "Episode 3",
    },
    {
        images: Episode4,
        title: "Episode 4",
    },
    {
        images: Episode5,
        title: "Episode 5",
    },
    {
        images: Episode6,
        title: "Episode 6",
    },
]

const DetailSlider = ({ route, navigation }) => {

    const dtParam = route.params

    // console.log('DA', dtParam);

    return (
        <View style={styles.pages}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={dtParam.item.image} style={styles.img}>
                    <View style={styles.wrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={IconArrowLeft} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.btnFavorite}>
                                <Image source={Favorite} />
                            </View>
                            <View style={styles.btnFavorite}>
                                <Image source={Download} />
                            </View>
                            <View style={styles.btnFavorite}>
                                <Image source={Share} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: responsiveWidth(20), marginTop: 10 }}>
                        <Text style={styles.txtDesc}>Genre {dtParam.item.genre}</Text>
                        <Text style={styles.txtNama}>{dtParam.item.nama}</Text>
                        <Text style={styles.txtDesc}>{dtParam.item.desc}</Text>
                        <Text style={styles.txtDesc}>Lihat Detail</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image source={IconStart} />
                            <Text style={{ color: '#FFFFFF', fontSize: 12, left: 5 }}>{dtParam.item.rate}</Text>
                            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 6, left: 10 }}>
                                <Text>RATE</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <TouchableOpacity
                                style={{
                                    width: responsiveWidth(117),
                                    paddingHorizontal: responsiveWidth(6),
                                    paddingVertical: responsiveHeight(4),
                                    borderRadius: 15,
                                    borderWidth: 2,
                                    borderColor: '#FFF',
                                    flexDirection: 'row'
                                }}
                            >
                                <Text style={{ color: '#FFF', fontSize: 13 }}>Baca episode {dtParam.item.episode}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <View>
                    {episode.map((item, index) => (
                        <TouchableOpacity key={index}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                                <Image source={item.images} />
                                <Text style={{ left: 15 }}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailSlider

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.primary
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(20),
        marginTop: responsiveHeight(20),
        alignItems: 'center',
    },
    img: {
        // position: 'absolute',
        height: responsiveHeight(320),
        width: '100%',
        // resizeMode: 'stretch'
    },
    btnFavorite: {
        backgroundColor: '#FFFFFF',
        padding: responsiveWidth(6),
        borderRadius: 20,
        marginLeft: responsiveWidth(15),
        width: responsiveWidth(24),
        height: responsiveWidth(24)
    },
    txtNama: {
        fontSize: 14,
        fontFamily: fonts.primary.bold,
        color: '#FFFFFF',
        marginTop: responsiveHeight(10),
        marginBottom: responsiveHeight(10)
    },
    txtDesc: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: fonts.primary.semibol,
        width: responsiveWidth(167)
    }
})
