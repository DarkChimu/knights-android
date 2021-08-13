import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
    SafeAreaView,
    StatusBar,
    Share
  } from 'react-native'

import { parse } from 'fast-xml-parser'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { hideNavigationBar } from 'react-native-navigation-bar-color'
import AudioPlayer from '../MyComponents/audioplayer'

const bg = require('../src/radio_section.png')
const img = require('../src/radio_crop.png')
export default function Radio(props) {
    const navigation = useNavigation()



    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React'
          })
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message)
        }
      }



    return (
        <SafeAreaView>
            <ScrollView>
            <View style={{ zIndex: 1, marginTop: 24 }}>
            <Image source={bg} style={{ minWidth: '100%', width: '100%', height:170 }} />
            </View>

                <View style={{ ...styles.container, paddingBottom: 58, borderTopStartRadius:20, borderTopEndRadius: 20, marginTop:0, zIndex: 1}}>
                    <View style={{ flexDirection: 'row', zIndex: 1, paddingVertical: 24 }}>
                        <Icon.Button
                            name="chevron-left"
                            size={30}
                            iconStyle={{ marginLeft: 10, marginRight: 0, marginTop: 19, color:'#0D2A4E' }}
                            backgroundColor="transparent"
                            onPress={() => navigation.navigate('Home')}
                        />
                        <Text style={{ ...styles.boldText, color: '#0D2A4E', marginTop: 15 }}>
                           Radio Caballeros 
                        </Text>

                        <Icon.Button
                            name="share-alt"
                            size={20}
                            iconStyle={{ top: 25, left:15, color:'#0D2A4E' }}
                            borderRadius={1}
                            backgroundColor="transparent"
                            color="#FEFFFE"
                            onPress={onShare}
                        />
                    </View>
               
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={img} style={{ minWidth: '50%', width:'75%', height:310 }} />
                    </View> 
                    <AudioPlayer track={'0'} />
                    
                    <View style={{padding:10}}></View>
                    <View style={{padding:20, borderTopWidth:1, marginTop:10}}></View>
                                        <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, color:'#0D2A4E', paddingBottom:0, fontSize:16 }}>
                        Este es el servicio de streaming de la Radio caballeros sintoniza esta estación para orar junto a los caballeros de la virgen
                        </Text>
                    <View>


                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = {
    ...commonFontStyle,
    container: {
        flex:1,
    }
}