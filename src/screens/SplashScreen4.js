import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { BgSplashScreen, BgSplashScreen3, BgSplashScreen4, Coolicon, Download1, Download2, Download3, Download4, Download5, HeaderSplashScreen, IconArrowLeft2, Slider1, Slider6, TipeGambar1, TipeGambar2, TipeGambar3, TipeGambar4, TipeGambar5, TipeGambar6 } from '../assets'
import BannerSlider, { BannerSliderSplash } from '../components/BannerSlider'
import Tombol from '../components/Tombol/Tombol'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const dataTahap =
{
    maks_tahap: '3',
    tahap_skrng: '3',

}

const sliders = [
    {
        id: 1,
        nama: "Drama",
        slug: "drama",
        gambar: Slider6
    },
    {
        id: 2,
        nama: "Fantasi",
        slug: "fantasi",
        gambar: Slider6
    },
    {
        id: 3,
        nama: "Komedi",
        slug: "komedi",
        gambar: Slider6
    },
    {
        id: 4,
        nama: "Slice Of Life",
        slug: "slice of life",
        gambar: Slider6
    }
]

const datas = [
    {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Favoritku',
        images: Download1,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 2,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Favoritku',
        images: Download2,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 3,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Favoritku',
        images: Download3,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 4,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Favoritku',
        images: Download4,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 5,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Favoritku',
        images: Download5,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
]

const SplashScreen3 = ({ navigation }) => {

    const [slider, setSlider] = useState(sliders);
    const [selectedKategori, setSelectedKategori] = useState([]);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={BgSplashScreen4} style={styles.bg}>
                <Image source={HeaderSplashScreen} style={styles.imgHeader} />
                <View style={styles.viewHeader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={IconArrowLeft2} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <Text>Tahap {dataTahap.tahap_skrng} dari {dataTahap.maks_tahap}</Text>
                    </View>
                    <Text>Tutup</Text>
                </View>

                <View style={styles.plhGmbr}>
                    <Text style={styles.txtPilihGenre}>Ini Pilihanmu</Text>
                </View>

                <View style={styles.viewCircular}>
                    <View style={styles.circularOff} />
                    <View style={styles.circularOff} />
                    <View style={styles.circularAktif} />
                </View>

                <View style={styles.container}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            slider.map((item, index) => {
                                return (
                                    <View key={index} style={styles.viewImgSlider}>
                                        <TouchableOpacity
                                        // onPress={() => navigation.navigate('DetailSlider', { item })}
                                        >
                                            <Image source={item.gambar} style={styles.img} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginHorizontal: responsiveWidth(20), marginTop: responsiveHeight(20), justifyContent: 'flex-end' }}>
                            <Text style={{ fontFamily: fonts.primary.bold, color: '#FFFFFF', fontSize: 14 }}>Yang Mungkin Kamu Suka</Text>

                            <View style={{ marginTop: responsiveHeight(30) }}>
                                {datas.map((itm, idx) => (
                                    <View key={idx} style={{ flexDirection: 'row', marginBottom: 20 }}>
                                        <Image source={itm.images} style={styles.image} />
                                        <View style={{ left: responsiveWidth(14) }}>
                                            <Text style={styles.txtTitle}>{itm.title}</Text>
                                            <Text style={styles.txtDesk}>{itm.desk}</Text>
                                            <Text style={styles.txtTitle}>Genre: {itm.genre}</Text>

                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ alignSelf: 'center', position: 'absolute' }}>
                        <Tombol
                            label="Selesai"
                            type="selesai"
                            onPress={() => navigation.replace('Login')}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen3

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%',
    },
    imgHeader: {
        position: 'absolute',
        resizeMode: 'stretch',
        width: "100%",
        height: responsiveHeight(160)
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(20),
        marginTop: responsiveHeight(20)
    },
    plhGmbr: {
        marginTop: responsiveHeight(20),
        marginLeft: responsiveWidth(20),
        marginRight: responsiveWidth(171)
    },
    txtPilihGenre: {
        fontSize: 16,
        fontFamily: fonts.primary.bold,
        lineHeight: 20,
        color: '#111010',
    },
    viewCircular: {
        marginTop: responsiveHeight(30),
        justifyContent: 'center',
        flexDirection: 'row',
    },
    circularAktif: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        marginLeft: responsiveWidth(5),
        backgroundColor: '#131212',
        borderRadius: 10
    },
    circularOff: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        marginLeft: responsiveWidth(5),
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10
    },
    item: {
        marginBottom: responsiveHeight(15),
        justifyContent: 'center',
        marginLeft: responsiveWidth(11),
        width: responsiveWidth(162),
        height: responsiveWidth(162)
    },
    container: {
        marginTop: responsiveHeight(40),
        marginLeft: responsiveWidth(20),
    },
    viewImgSlider: {
        marginVertical: responsiveHeight(2),
        marginRight: responsiveWidth(5),
        marginLeft: 5,
        width: responsiveWidth(330),
        height: responsiveHeight(180)
    },
    img: {
        borderRadius: 5,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    image: {
        width: responsiveWidth(105),
        height: responsiveWidth(105),
        borderRadius: 5
    },
    txtTitle: {
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: fonts.primary.bold,
        lineHeight: 20
    },
    txtDesk: {
        maxWidth: responsiveWidth(215),
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: fonts.primary.semibol,
        lineHeight: 20
    }
})
