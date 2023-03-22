import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabItem from './TabItem';

const CustomBottomNav = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabItem
                        key={index}
                        isFocused={isFocused}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        label={label}
                    />
                );
            })}
        </View>
    );
}

export default CustomBottomNav

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        paddingVertical: 8,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'space-between'
    }
})