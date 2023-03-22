import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { BgSplashScreen, BgSplashScreen3, Coolicon, HeaderSplashScreen, IconArrowLeft2, Slider1, TipeGambar1, TipeGambar2, TipeGambar3, TipeGambar4, TipeGambar5, TipeGambar6 } from '../assets'
import Tombol from '../components/Tombol/Tombol'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const dataTahap =
{
    maks_tahap: '3',
    tahap_skrng: '2',

}

const katList = [
    {
        id: 1,
        nama: "Drama",
        slug: "drama",
        gambar: TipeGambar1
    },
    {
        id: 2,
        nama: "Fantasi",
        slug: "fantasi",
        gambar: TipeGambar2
    },
    {
        id: 3,
        nama: "Komedi",
        slug: "komedi",
        gambar: TipeGambar3
    },
    {
        id: 4,
        nama: "Slice Of Life",
        slug: "slice of life",
        gambar: TipeGambar4
    },
    {
        id: 5,
        nama: "Horor",
        slug: "horor",
        gambar: TipeGambar5
    },
    {
        id: 6,
        nama: "Romance",
        slug: "romance",
        gambar: TipeGambar6
    },
]

const SplashScreen3 = ({ navigation }) => {

    const [kategori, setKategori] = useState(katList);
    const [selectedKategori, setSelectedKategori] = useState([]);

    const renderKategori = ({ item, index }) => {
        const { nama, slug, gambar } = item;

        // const isSelected = selectedKategori.filter((fltr) => fltr === slug).length > 0;
        return (
            <TouchableOpacity style={styles.item}>
                <Image
                    source={gambar}
                    style={{
                        borderRadius: 18,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'stretch'
                    }}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={BgSplashScreen3} style={styles.bg}>
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
                    <Text>Lewati</Text>
                </View>

                <View style={styles.plhGmbr}>
                    <Text style={styles.txtPilihGenre}>Pilih Tipe Gambar Komik Yang Kamu Suka</Text>
                </View>

                <View style={styles.viewCircular}>
                    <View style={styles.circularOff} />
                    <View style={styles.circularAktif} />
                    <View style={styles.circularOff} />
                </View>

                <View style={styles.container}>
                    <FlatList
                        data={kategori}
                        numColumns={2}
                        renderItem={renderKategori}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={{ alignSelf: 'center', position: 'absolute' }}>
                        <Tombol
                            label="Berikutnya"
                            type="next"
                            onPress={() => navigation.replace('SplashScreen4')}
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
        maxWidth: 190
    },
    viewCircular: {
        marginTop: responsiveHeight(10),
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
        height: responsiveWidth(162),
        // backgroundColor: 'red'
    },
    container: {
        marginHorizontal: responsiveWidth(13),
        marginTop: responsiveHeight(39),
        flex: 1,
        justifyContent: 'flex-end'
    }
})
