import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconArrowRight } from '../assets'
import Header from '../components/Header'
import KategoriGenre from '../components/KategoriGenre'
import { colors } from '../utils/Color'
import { fonts } from '../utils/Fonts'
import { responsiveWidth } from '../utils/Utils'
import BannerSlider from '../components/BannerSlider'
import Rekomendasi from '../components/Rekomendasi'
import TopKategori from '../components/TopKategori'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.pages}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="Selamat datang di meComic!" />
                <KategoriGenre />
                <View style={styles.wrapper}>
                    <View>
                        <Text style={styles.txt}>Bingung mau baca Komik apa? berikut ini</Text>
                        <Text style={styles.txt}>ada Komik edisi terbaru dari meComic!</Text>
                    </View>
                    <View>
                        <Image source={IconArrowRight} />
                    </View>
                </View>
                <BannerSlider navigation={navigation} />
                <View style={{ marginTop: 20, marginHorizontal: responsiveWidth(20) }}>
                    <Text style={styles.txt}>Mau Baca Yang Lain?</Text>
                </View>
                <Rekomendasi />
                <TopKategori />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    wrapper: {
        marginHorizontal: responsiveWidth(20),
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt: {
        fontSize: 14,
        fontFamily: fonts.primary.bold
    }
})
