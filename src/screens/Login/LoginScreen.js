import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { IconGoogle, Logo, Vektor1, Vektor2 } from '../../assets'
import { fonts } from '../../utils/Fonts'
import { responsiveHeight, responsiveWidth } from '../../utils/Utils'

const LoginScreen = ({navigation}) => {

    const [onfocus, setOnfocus] = useState(false)

    let border = '#C4C4C4'
    if (onfocus == true) {
        border = '#35B6FF'
    }

    return (
        <View style={styles.pages}>
            <>
                <Image source={Vektor1} style={styles.imgVektor1} />
                <View style={styles.viewHeader}>
                    <Text style={styles.txtMasuk}>Masuk</Text>
                    <View style={{ height: responsiveHeight(16) }} />
                    <Image source={Logo} style={styles.logo} />
                </View>

                <View style={styles.container}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Masuk untuk melanjutkan</Text>
                        <Text style={styles.txtOnFocus}>Lupa Password ?</Text>
                    </View>

                    <View style={{ marginTop: responsiveHeight(20) }}>
                        {onfocus == true &&
                            <View style={styles.viewOnFocus}>
                                <Text style={styles.txtOnFocus}>Username</Text>
                            </View>
                        }
                        <TextInput style={[styles.input, { borderColor: border }]}
                            underlineColorAndroid="transparent"
                            placeholder={onfocus == false ? "Username" : null}
                            placeholderTextColor="#C4C4C4"
                            autoCapitalize="none"
                            onFocus={() => setOnfocus(true)}
                            // onChangeText={this.handleEmail} 
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        {onfocus == true &&
                            <View style={styles.viewOnFocus}>
                                <Text style={styles.txtOnFocus}>Password</Text>
                            </View>
                        }
                        <TextInput style={[styles.input, { borderColor: border }]}
                            underlineColorAndroid="transparent"
                            placeholder={onfocus == false ? "Password" : null}
                            placeholderTextColor="#C4C4C4"
                            autoCapitalize="none"
                            onFocus={() => setOnfocus(true)}
                            secureTextEntry
                            // onChangeText={this.handlePassword} 
                        />
                    </View>

                    <View style={{ marginTop: responsiveHeight(15) }}>
                        <Text style={{ textAlign: 'center', fontSize: 12 }}>By registering I agree with <Text style={{ color: '#35B6FF' }}>Terms & Conditions </Text> and </Text>
                        <Text style={{ textAlign: 'center', color: '#35B6FF', fontSize: 12 }}>Privacy Policy of meMiles</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        // onPress={() => this.login(this.state.email, this.state.password)}
                        onPress={() => navigation.replace('MainScreen')}
                    >
                        <Text style={styles.submitButtonText}> Masuk </Text>
                    </TouchableOpacity>

                    <View style={styles.viewGaris}>
                        <View style={{ borderWidth: 1, flex: 1, borderColor: '#BABABA' }} />
                        <Text style={{ fontSize: 13, paddingHorizontal: 5, color: '#8A8A8A' }}>Atau</Text>
                        <View style={{ borderWidth: 1, flex: 1, borderColor: '#BABABA' }} />
                    </View>

                    <TouchableOpacity
                        style={styles.submitButtonGoogle}
                        // onPress={() => this.login(this.state.email, this.state.password)}
                    >
                        <Image source={IconGoogle} />
                        <Text style={styles.submitButtonTextGoogle}> Masuk dengan Google </Text>
                    </TouchableOpacity>
                </View>
            </>
            <View style={{marginTop: responsiveHeight(136)}}>
                <Image source={Vektor2} style={styles.imgVektor2} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        justifyContent: 'space-between'
    },
    imgVektor1: {
        position: 'absolute',
        width: responsiveWidth(375),
        height: responsiveHeight(180),
        marginTop: responsiveHeight(-50),
        resizeMode: 'stretch'
    },
    imgVektor2: {
        width: responsiveWidth(375),
        height: responsiveHeight(160),
        resizeMode: 'stretch'
    },
    viewHeader: {
        alignItems: 'center',
        marginTop: responsiveHeight(10)
    },
    txtMasuk: {
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: fonts.primary.bold
    },
    logo: {
        width: responsiveWidth(80),
        height: responsiveWidth(90)
    },
    container: {
        marginHorizontal: responsiveWidth(20),
        marginTop: responsiveHeight(30)
    },
    viewGaris: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: responsiveHeight(25)
    },




    viewOnFocus: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        marginTop: responsiveHeight(-10),
        zIndex: 1,
        marginLeft: responsiveWidth(20),
        paddingHorizontal: 3
    },
    txtOnFocus: {
        color: '#35B6FF',
        textAlign: 'center',
        fontSize: 14
    },
    input: {
        paddingVertical: 8,
        paddingLeft: 20,
        // borderColor: '#C4C4C4',
        borderRadius: 8,
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#35B6FF',
        paddingVertical: responsiveHeight(10),
        paddingHorizontal: responsiveWidth(80),
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: responsiveHeight(20)
    },
    submitButtonText: {
        color: 'white'
    },
    submitButtonGoogle: {
        backgroundColor: '#C02127',
        paddingVertical: responsiveHeight(10),
        paddingLeft: responsiveWidth(15),
        paddingRight: responsiveWidth(99),
        // alignSelf: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // marginTop: responsiveHeight(20)
    },
    submitButtonTextGoogle: {
        color: 'white'
    }
})
