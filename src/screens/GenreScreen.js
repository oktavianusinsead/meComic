import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Gambar1, Gambar2, Gambar3, IconStart } from '../assets'
import Header from '../components/Header'
import { colors } from '../utils/Color'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const katList = [
    {
        id: 1,
        nama: "All"
    },
    {
        id: 2,
        nama: "Drama"
    },
    {
        id: 3,
        nama: "Komedi"
    },
    {
        id: 4,
        nama: "Slice Of Life"
    },
    {
        id: 5,
        nama: "Horor"
    },
    {
        id: 6,
        nama: "Romance"
    },
]

const Jadwal = [
    {
        id: 1,
        nama: "Bad Guy",
        kategori: "Komedi",
        images: Gambar1,
        jumlah: '421.042'
    },
    {
        id: 2,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Komedi",
        images: Gambar2,
        jumlah: '421.042'
    },
    {
        id: 3,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Drama",
        images: Gambar3,
        jumlah: '421.042'
    },
    {
        id: 4,
        nama: "Bad Guy",
        kategori: "Komedi",
        images: Gambar1,
        jumlah: '421.042'
    },
    {
        id: 5,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Komedi",
        images: Gambar2,
        jumlah: '421.042'
    },
    {
        id: 6,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Drama",
        images: Gambar3,
        jumlah: '421.042'
    },
    {
        id: 7,
        nama: "Bad Guy",
        kategori: "Komedi",
        images: Gambar1,
        jumlah: '421.042'
    },
    {
        id: 8,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Komedi",
        images: Gambar2,
        jumlah: '421.042'
    },
    {
        id: 9,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Drama",
        images: Gambar3,
        jumlah: '421.042'
    },
    {
        id: 10,
        nama: "Lorem Ipsum Dolor Sit Amet",
        kategori: "Drama",
        images: Gambar3,
        jumlah: '421.042'
    },
]

const GenreScreen = () => {

    const [kategori, setKategori] = useState(katList);
    const [daftarKategori, setDaftarKategori] = useState(Jadwal);
    const [tagSelected, setTagSelected] = useState(null);
    const [genreSelected, setGenreSelected] = useState('All');

    return (
        <View style={styles.page}>
            <Header title="Genre yang bisa kamu pilih" />
            <View style={{ marginHorizontal: responsiveWidth(20) }}>
                <View style={styles.viewItem}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {kategori.map((itm, idx) => (
                            <TouchableOpacity
                                key={idx} 
                                onPress={() => {
                                    setTagSelected(itm.nama)
                                    setGenreSelected(itm.nama)
                                }}
                                style={genreSelected == itm.nama ? styles.btnAktif : styles.btn}
                            >
                                <Text style={genreSelected == itm.nama ? {fontSize: 18, color: '#179EFF'} : {fontSize: 18 }}>{itm.nama}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={{marginBottom: responsiveWidth (165)}}>
                    <FlatList
                        data={genreSelected === 'All' ? daftarKategori : daftarKategori.filter(fltr => fltr.kategori == genreSelected)}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.itmContainer}>
                                <TouchableOpacity>
                                    <Image source={item.images} style={styles.imgKomik} />
                                    <View style={{ marginTop: responsiveHeight(10) }}>
                                        <Text style={styles.namaKomik}>{item.nama}</Text>
                                        <Text style={styles.txtKategori}>{item.kategori}</Text>
                                        <View style={styles.bintang}>
                                            <Image source={IconStart} />
                                            <Text style={styles.txtbintang}>421.042</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

export default GenreScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    viewItem: {
        marginTop: 20,
        marginBottom: responsiveHeight(30)
    },
    btn: {
        marginRight: responsiveWidth(25),
    },
    btnAktif: {
        marginRight: responsiveWidth(25),
        borderBottomWidth: 2,
        borderBottomColor: '#179EFF',
    },
    itmContainer: {
        marginBottom: responsiveHeight(10),
        marginRight: responsiveWidth(10),
        width: responsiveWidth(105),
    },
    imgKomik: {
        width: responsiveWidth(105),
        height: responsiveWidth(105),
        borderRadius: 4,
        resizeMode: 'stretch'
    },
    namaKomik: {
        fontSize: 13,
        fontFamily: fonts.primary.bold
    },
    txtKategori: {
        fontSize: 13,
        marginTop: responsiveHeight(5),
        color: '#8A8A8A',
        fontFamily: fonts.primary.semibol
    },
    bintang: {
        flexDirection: 'row',
        marginTop: responsiveHeight(10),
        alignItems: 'center'
    },
    txtbintang: {
        fontSize: 13,
        color: '#EFAC00',
        fontFamily: fonts.primary.semibol,
        left: responsiveWidth(5)
    }
})
