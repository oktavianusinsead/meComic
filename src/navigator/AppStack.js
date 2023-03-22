import React from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    IconHome,
    IconHomeAktif,
    IconToday,
    IconTodayAktif,
    IconGenre,
    IconGenreAktif,
    IconFavoritku,
    IconFavoritkuAktif,
    IconAccount,
    IconAccountAktif
} from '../assets'
import HomeScreen from '../screens/HomeScreen'
import TodayScreen from '../screens/TodayScreen'
import GenreScreen from '../screens/GenreScreen'
import FavoritkuScreen from '../screens/FavoritkuScreen'
import AccountScreen from '../screens/AccountScreen'
import DetailSlider from '../screens/DetailSlider';
import IsiKoin from '../screens/IsiKoin';
import { fonts } from '../utils/Fonts';
import SplashScreen from '../screens/SplashScreen';
import SplashScreen2 from '../screens/SplashScreen2';
import SplashScreen3 from '../screens/SplashScreen3';
import SplashScreen4 from '../screens/SplashScreen4';
import LoginScreen from '../screens/Login/LoginScreen';
import { responsiveHeight } from '../utils/Utils';
import CustomBottomNav from './BottomNav';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
    let textColor = 'blue'
    return (
        <Tab.Navigator
        // tabBar={props => <CustomBottomNav {...props} />
        
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? IconHomeAktif : IconHome
                    } else if (route.name === 'Today') {
                        iconName = focused
                            ? IconTodayAktif
                            : IconToday
                    } else if (route.name === 'Genre') {
                        iconName = focused
                            ? IconGenreAktif
                            : IconGenre
                    } else if (route.name === 'Favoritku') {
                        iconName = focused
                            ? IconFavoritkuAktif
                            : IconFavoritku
                    } else if (route.name === 'Account') {
                        iconName = focused
                            ? IconAccountAktif
                            : IconAccount
                    }
                    return <Image source={iconName} size={size} color={color} style={{ marginVertical: responsiveHeight(5)}} /> 
                },
                tabBarLabelStyle: {fontSize: 13},
                tabBarActiveTintColor: textColor,
                tabBarInactiveTintColor: '#000000',
                // tabBarStyle: {backgroundColor: 'red', borderTopLeftRadius: 10, borderTopRightRadius: 10}
            })}
    // }
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Today" component={TodayScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Genre" component={GenreScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Favoritku" component={FavoritkuScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SplashScreen2"
                component={SplashScreen2}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SplashScreen3"
                component={SplashScreen3}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SplashScreen4"
                component={SplashScreen4}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MainScreen"
                component={MainApp}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="DetailSlider"
                component={DetailSlider}
                options={{
                    // headerTitleAlign: 'center',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="IsiKoin"
                component={IsiKoin}
                options={{
                    title: "Isi Koin",
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default AppStack
