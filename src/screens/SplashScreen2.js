import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { BgSplashScreen, Coolicon, HeaderSplashScreen } from '../assets'
import Tombol from '../components/Tombol/Tombol'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const dataTahap =
{
    maks_tahap: '3',
    tahap_skrng: '1',

}

const katList = [
    {
        id: 1,
        nama: "Drama",
        slug: "drama"
    },
    {
        id: 2,
        nama: "Fantasi",
        slug: "fantasi"
    },
    {
        id: 3,
        nama: "Komedi",
        slug: "komedi"
    },
    {
        id: 4,
        nama: "Slice Of Life",
        slug: "slice of life"
    },
    {
        id: 5,
        nama: "Horor",
        slug: "horor"
    },
    {
        id: 6,
        nama: "Romance",
        slug: "romance"
    },
    {
        id: 7,
        nama: "Aksi",
        slug: 'aksi'
    }
]

const SplashScreen2 = ({ navigation }) => {

    const [kategori, setKategori] = useState(katList);
    const [selectedKategori, setSelectedKategori] = useState([]);

    const renderKategori = ({ item, index }) => {
        const { nama, slug } = item;

        const isSelected = selectedKategori.filter((fltr) => fltr === slug).length > 0;
        return (
            <TouchableOpacity
                onPress={() => {
                    if (isSelected) {
                        setSelectedKategori((prev) => prev.filter((fltr) => fltr !== slug))
                    } else {
                        setSelectedKategori(prev => [...prev, slug])
                    }
                }}
                style={[styles.item]}>
                {
                    isSelected
                        ?
                        <View style={styles.viewItemAktif}>
                            <Image source={Coolicon} style={{ marginRight: responsiveWidth(10) }} />
                            <Text style={styles.txtItem}>{nama}</Text>
                        </View>
                        :
                        <View style={{ marginLeft: responsiveWidth(20) }}>
                            <Text style={styles.txtItem}>{nama}</Text>
                        </View>
                }
            </TouchableOpacity >
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={BgSplashScreen} style={styles.bg}>
                <Image source={HeaderSplashScreen} style={styles.imgHeader} />
                <View style={styles.viewHeader}>
                    <Text>Tahap {dataTahap.tahap_skrng} dari {dataTahap.maks_tahap}</Text>
                    <Text onPress={() => navigation.replace('Login')}>Lewati</Text>
                </View>
                <View style={styles.plhGenre}>
                    <Text style={styles.txtPilihGenre}>Pilih Genre Kesukaanmu</Text>
                </View>
                <View style={styles.viewCircular}>
                    <View style={styles.circularAktif} />
                    <View style={styles.circularOff} />
                    <View style={styles.circularOff} />
                </View>

                <View style={{ marginHorizontal: responsiveHeight(20), justifyContent: 'space-between', flex: 1, }}>
                    <View style={styles.viewItem}>
                        <FlatList
                            data={kategori}
                            renderItem={renderKategori}
                            numColumns={2}
                        />

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Tombol
                            label="Berikutnya"
                            type="next"
                            onPress={() => navigation.replace('SplashScreen3')}
                        />
                    </View>
                </View>


            </ImageBackground>
        </View>
    )
}

export default SplashScreen2

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
    plhGenre: {
        marginTop: responsiveHeight(20),
        marginHorizontal: responsiveWidth(20)
    },
    txtPilihGenre: {
        fontSize: 16,
        fontFamily: fonts.primary.bold,
        lineHeight: 20,
        color: '#111010',
        letterSpacing: 0.5
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
    viewItem: {
        marginTop: responsiveHeight(30)
    },
    item: {
        marginTop: responsiveHeight(15),
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
        marginLeft: responsiveWidth(11),
        width: responsiveWidth(158),
        height: responsiveHeight(46),
        borderRadius: 18,
    },
    txtItem: {
        fontSize: 14,
        fontFamily: fonts.primary.bold,
        color: '#FFFFFF',
        lineHeight: 20
    },
    viewItemAktif: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: responsiveWidth(15)
    },
    itemAktif: {
        marginTop: responsiveHeight(15),
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginLeft: responsiveWidth(11),
        width: responsiveWidth(158),
        height: responsiveHeight(46),
        borderRadius: 18,
        paddingLeft: responsiveWidth(20)
    },
})
