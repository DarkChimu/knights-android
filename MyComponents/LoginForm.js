//import liraries
import React, { Component } from 'react'
import { View, ImageBackground, Image, Text, StyleSheet, Button, Alert, TextInput, ScrollView, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FlatButton from '../MyComponents/button'
import FlatButtonFace from '../MyComponents/buttonfacebook'
import FlatButtonGoogle from '../MyComponents/buttongoogle'
import EmailAuth from '../MyComponents/EmailAuth'

const bg = require('../src/splash_backg.png')
const logo = require('../src/icon_virgen.png')
const logo2 = require('../src/logo2.png')

// create a component
const LoginForm = props => {
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={bg}
                    style={{ height: '100%', width: '100%' }}>
                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 150 }}>
                        <Image source={logo2}
                            style={{ height: 80, width: 200 }}
                        />
                        <Text style={styles.boldText}> ¡ Salve María !</Text>

                        <Text style={styles.normalText}> Inicia sesión y ora con junto a los Caballeros de la Virgen </Text>

                        {/* <TextInput
                        style={styles.input}
                        placeholder="    e-mail*"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="   Contraseña*"
                        placeholderTextColor="white"
                    /> */}
                        <View style={styles.container}>

                            <EmailAuth />

                        </View>
                        <TouchableOpacity
                        onPress={()=> navigation.navigate('Splash')}
                        >
                        <Text style={styles.normalText}>         ¿No tienes cuenta?  !Haz click aquí para registarte!                </Text>
                        </TouchableOpacity>
                        <Text style={{ ...styles.normalText }}> ¿Olvidate tu contraseña? Click aquí </Text>



                       
                        {/* <FlatButtonGoogle
                            text="Ingresar con google "
                            onPress={() => {

                                Alert.alert('Seccion en Desarrollo')
                            }}
                        /> */}


                        {/* <FlatButtonFace
                            text="Ingresar con facebook"
                            onPress={() => {

                                Alert.alert('Seccion en Desarrollo')
                            }}
                        /> */}
                        <View style={{padding:100}}></View>

                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boldText: {

        fontFamily: 'Nunito-Regular',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        padding: 10
    },
    input: {
        width: '95%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        margin: 20

    },

    normalText: {
        textAlignVertical: 'center',
        textAlign: 'center',
        marginBottom: 5,
        padding: 10,
        fontWeight: 'normal',
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: 'white'


    },

    buttonStart: {
        padding: 20,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        color: 'white'
    }

})

//make this component available to the app
export default LoginForm
