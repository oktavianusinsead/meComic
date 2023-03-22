import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import {
    IconHome,
    IconHomeAktf,
    IconToday,
    IconTodayAktif,
    IconGenre,
    IconGenreAktif,
    IconFavoritku,
    IconFavoritkuAktif,
    IconAccount,
    IconAccountAktif
} from '../assets'

const TabItem = ({ isFocused, onLongPress, onPress, label }) => {

     
    const Icons = () => {
        if (label === "Home") {
            return isFocused ? <IconHomeAktf/> : <IconHome />
        }

        if (label === "Today") {
            return isFocused ? <IconTodayAktif /> : <IconToday />
        }

        if (label === "Genre") {
            return isFocused ? <IconGenreAktif /> : <IconGenre />
        }

        if (label === "Favoritku") {
            return isFocused ? <IconFavoritkuAktif /> : <IconFavoritku />
        }

        if (label === "Account") {
            return isFocused ? <IconAccountAktif /> : <IconAccount />
        }

        return <IconHome />
    }


    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icons />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: (isFocused) => ({
        color: isFocused ? '#FFFFFF' : '#6AB1D7',
        // fontSize: 14,
        // marginTop: 4,
        // fontFamily: fonts.primary.bold
    })
})
