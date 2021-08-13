import React, { Component, useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text ,StyleSheet, Button, Alert} from 'react-native';
import FlatButton from '../MyComponents/button';

var bg=require('../src/splash_backg.png');

var logo=require('../src/icon_virgen.png');
import {useNavigation } from '@react-navigation/native' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setConstantValue } from 'typescript';
import Loading from '../MyComponents/Loading';
import HomeScreen from './home';
import Delayed from '../helpers/delayed';

export default function SplashScreen(props) {
    const navigation = useNavigation()

    const [ data, setUser ] = useState({user: false, querying: false})
    
    // useEffect(() => {
    //     setUser({ user: false, querying: true })
    //     const isLogged = async () => {
    //         const loggedUser = await AsyncStorage.getItem('LogIn')
    //         try {
    //             const userInfo = await JSON.parse(loggedUser)
    //             setUser({ user: userInfo.logged, querying: false })
    //         } catch (error) {
    //             console.log('No User is Logged')
    //         }
    // }   
    //     isLogged()
    //     return () => isLogged()
    // }, [])


    if (data.user) {
        return (<HomeScreen/>)
    } else {
        return (
            <Delayed waitBeforeShow={200}>
                <ImageBackground
                  source={bg}
                  style={{height:'100%', width:'100%'}}>
                      <View 
                      style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                        <Image source={logo}           
                        style={{height:150, width:100}}></Image>
                        <Text style={{color: 'white', fontSize: 25, padding:10, fontFamily:'Rosarivo-Regular' }}> CABALLEROS DE LA VIRGEN</Text>
                        <Text style={styles.boldText}> ¡ Salve María !</Text>
                        
                        <Text style={styles.normalText}> Mi Inmaculado Corazón será tu refugio y el camino que te conducirá a Dios</Text>    
                    
                        <FlatButton 
                        text="Comenzar" 
                        onPress={()=> navigation.navigate('Home')}
                       // onPress={()=>{navigator.navigate('home');}}
                        />
            


                      </View>        
                  </ImageBackground>
            </Delayed>
                )
    }
  }

  const styles = StyleSheet.create({
    boldText: {
        
        fontFamily:'Nunito-Regular',
        fontWeight: 'bold',
        fontSize: 25,     
        color: 'white',   
        padding:10
    },
    
    normalText: {
        textAlignVertical: "center",
        textAlign: "center",
        marginBottom:15,
        padding: 20,
        fontWeight: 'normal',
        fontSize: 14,     
        color: 'white',   
        fontFamily:'Rosarivo-Italic',


    },
    buttonStart: {
        padding: 20,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        color: 'white',
    }

});
