import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { KategoriAksi, KategoriDrama, KategoriKerajaan, KategoriRomance, KategoriThriller } from '../assets'
import { fonts } from '../utils/Fonts'
import { responsiveWidth } from '../utils/Utils'

const Kategori = [
    {
        id: 1,
        image: KategoriDrama
    },
    {
        id: 2,
        image: KategoriAksi
    },
    {
        id: 3,
        image: KategoriKerajaan
    },
    {
        id: 4,
        image: KategoriRomance
    },
    {
        id: 5,
        image: KategoriThriller
    },
]

const KategoriGenre = () => {
    
    const [kategori, setKategori] = useState(Kategori)

    return (
        <View style={styles.container}>
            <Text style={styles.txtGenre}>Baca Komik Berdasarkan Genre</Text>
            <View style={styles.viewGenre}>
                {
                    kategori.map((item, index) => {
                        return (
                            <View key={index} style={styles.viewKategori}>
                                <Image source={item.image} />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default KategoriGenre

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: responsiveWidth(20),
    },
    viewGenre: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtGenre: {
        fontSize: 14,
        fontFamily: fonts.primary.bold
    },
    viewKategori: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20
    }
})
