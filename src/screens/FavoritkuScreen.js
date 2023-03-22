import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Download1, Download2, Download3, Download4, Download5, Episode1, Episode2, Episode3, Episode4, IconSearch } from '../assets'
import Header from '../components/Header'
import { colors } from '../utils/Color'
import { fonts } from '../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../utils/Utils'

const data = [
    {
        id: 1,
        nama: 'Favoritku',
    },
    {
        id: 2,
        nama: 'Unduhan',
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
    {
        id: 5,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Favoritku',
        images: Download3,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 6,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Unduhan',
        images: Download1,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 7,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Unduhan',
        images: Download2,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 8,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Unduhan',
        images: Download3,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 9,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Unduhan',
        images: Download4,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 10,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Unduhan',
        images: Download5,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 11,
        title: 'Lorem Ipsum Dolor Sit Amet',
        genre: 'Komedi',
        status: 'Unduhan',
        images: Download3,
        desk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
]

const FavoritkuScreen = () => {

    // const [datas, setDatas] = useState()
    const [tagSelected, setTagSelected] = useState(null);
    const [favoriteSelected, setFavoriteSelected] = useState('Favoritku');

    return (
        <View style={styles.pages}>
            <View style={styles.header}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((itm, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => {
                                setTagSelected(itm.nama)
                                setFavoriteSelected(itm.nama)
                            }}
                            style={favoriteSelected == itm.nama ? styles.btnAktif : styles.btn}
                        >
                            <Text style={favoriteSelected == itm.nama ? styles.btnAktif : styles.btn}>{itm.nama}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View>
                    <Image source={IconSearch} />
                </View>
            </View>
            <ScrollView>
                <View style={{ marginTop: responsiveHeight(30) }}>
                    {datas.filter(fltr => fltr.status == favoriteSelected).map((itm, idx) => (
                        <View key={idx} style={{ flexDirection: 'row', marginHorizontal: responsiveWidth(20), marginBottom: 20 }}>
                            <Image source={itm.images} style={styles.image} />
                            <View style={{ left: responsiveWidth(14) }}>
                                <Text style={styles.txtTitle}>{itm.title}</Text>
                                <Text style={{ fontSize: 13, fontFamily: fonts.primary.semibol, marginBottom: responsiveHeight(5) }}>Genre: {itm.genre}</Text>
                                <Text style={{ maxWidth: responsiveWidth(215), fontSize: 13, fontFamily: fonts.primary.semibol, lineHeight: 15 }}>{itm.desk}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default FavoritkuScreen

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.primary
    },
    header: {
        marginHorizontal: responsiveWidth(20),
        marginTop: responsiveHeight(20),
        flexDirection: 'row',
        // backgroundColor: 'orange',
        paddingVertical: 6
    },
    btn: {
        fontSize: 18,
        marginRight: responsiveWidth(20),
    },
    btnAktif: {
        marginRight: responsiveWidth(20),
        fontSize: 18,
        fontFamily: fonts.primary.bold
    },
    image: {
        width: responsiveWidth(105),
        height: responsiveHeight(105),
        borderRadius: 5
    },
    txtTitle: {
        fontSize: 14,
        fontFamily: fonts.primary.bold,
        lineHeight: 20
    }
})
