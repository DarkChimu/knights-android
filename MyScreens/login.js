import React, { Component } from 'react'
import { View, ImageBackground, Image, Text ,StyleSheet, Button, Alert, TextInput, ScrollView, SafeAreaView } from 'react-native'
import FlatButton from '../MyComponents/button'
import FlatButtonFace from '../MyComponents/buttonfacebook'
import FlatButtonGoogle from '../MyComponents/buttongoogle'
import {useNavigation } from '@react-navigation/native'



var bg = require('../src/splash_backg.png')

var logo = require('../src/icon_virgen.png')
var logo2 = require('../src/logo2.png')

export default function LoginScreen(props) {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={bg}
                    style={{ zIndex: 0, height: '100%', width: '100%' }} />
                <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 130 }}>
                        <Image source={logo2}
                            style={{ height: 80, width: 200 }} 
                        />
                        <Text style={styles.boldText}> ¡ Salve María !</Text>

                        <Text style={styles.normalText}> Inicia sesión y ora con junto a los Caballeros de la Virgen </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="    e-mail*"
                            placeholderTextColor="white"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="   Contraseña*"
                            placeholderTextColor="white"
                        />



                        <FlatButton
                            text="Ingresar"
                            onPress={() => props.navigation.navigate('Home')}
                        //onPress={()=>{

                        //navigator.navigate('home')
                        //}}

                        />

                        <FlatButtonGoogle
                            text="Ingresar con google "
                            onPress={() => {

                                navigator.navigate("home")
                            }}
                        />


                        <FlatButtonFace
                            text="Ingresar con facebook"
                            onPress={() => {

                                navigator.navigate("home")
                            }}
                        />
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    boldText: {
        
        fontFamily:'Nunito-Regular',
        fontWeight: 'bold',
        fontSize: 25,     
        color: 'white',   
        padding:10
    },
    input: {       
        width:300,
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 20,
        margin :20

    },
    
    normalText: {
        textAlignVertical: "center",
        textAlign: "center",
        marginBottom:15,
        padding: 20,
        fontWeight: 'normal',
        fontSize: 14,     
        color: 'white',   
        fontFamily:'Nunito-Regular',


    },
    buttonStart: {
        padding: 20,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        color: 'white',
    }

})
