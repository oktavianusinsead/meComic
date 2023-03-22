import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Slider1, Slider2, Slider3, Slider4, Slider5 } from '../assets';
import { responsiveHeight, responsiveWidth } from '../utils/Utils';

const Slider = [
    {
        id: 1,
        image: Slider1,
        nama: 'Bad Guy',
        genre: 'Komedi',
        rate: '464.230',
        episode: '1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 2,
        image: Slider2,
        nama: 'Hekko',
        genre: 'Komedi',
        rate: '464.230',
        episode: '1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 3,
        image: Slider3,
        nama: 'Bad Guy',
        genre: 'Komedi',
        rate: '464.230',
        episode: '1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 4,
        image: Slider4,
        nama: 'Bad Guy',
        genre: 'Komedi',
        rate: '464.230',
        episode: '1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
    {
        id: 5,
        image: Slider5,
        nama: 'Bad Guy',
        genre: 'Komedi',
        rate: '464.230',
        episode: '1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
    },
]

const BannerSlider = ({navigation}) => {

    const [gambar, setGambar] = useState(Slider);
// console.log();
    return (
        <View style={styles.viewSlider}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    gambar.map((item, index) => {
                        return (
                            <View key={index} style={styles.viewImgSlider}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('DetailSlider', {item})}
                                >
                                    <Image source={item.image} style={styles.img} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({
    viewSlider: {
        marginTop: 20,
        marginLeft: responsiveWidth(20),
    },
    viewImgSlider: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5,
        marginVertical: responsiveHeight(2),
        marginRight: responsiveWidth(5),
        width: responsiveWidth(330),
        height: responsiveHeight(200),
    },
    img: {
        borderRadius: 5,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
})