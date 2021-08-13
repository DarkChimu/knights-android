import React, { Component, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Share
  } from 'react-native'

import moment from 'moment'
import RosarioAccordion from '../MyComponents/RosarioAccordion'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/rosario_header.png')

export default function Rosario(props) {
    const navigation = useNavigation()

    const [data, setData] = useState({ view: 'gloriosos' , title: 'Gloriosos'})


    useEffect(() => {
        
    }, [data.view])

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
          console.log(error.message)
        }
      }

        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ zIndex: 1, marginTop: 24 }}>
                        <Image source={bg} style={{ minWidth: '100%', width: '100%' }} />
                    </View>
                    <View style={{ zIndex: 2, position: 'absolute', top: 35, left: 10 }} >
                        <Icon
                            name="chevron-left"
                            size={25}
                            borderRadius={50}
                            backgroundColor="transparent"
                            color="#0D2A4E"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                    <View style={{ ...styles.cardContainer, position: 'absolute' ,marginVertical: 0, paddingBottom: 2, alignItems: 'flex-end', height: 65 ,top: 230, width: '100%', marginTop:50 }} >
                        <Icon
                            name="share-alt" size={16}
                            onPress={onShare}
                        />
                    </View>
                    <View>
                        <Text style={{ ...styles.boldText, zIndex: 3, marginVertical: 0, paddingVertical: 0, marginLeft: 15, top: '-110%', width: 200}}>
                            Santo Rosario 
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 0, marginTop: '-5%', marginLeft: 5 }}>
                        <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0 }}>
                            {(moment().format('LLLL').toUpperCase())}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, textAlign: 'justify', fontSize: 14 }}>
                            La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", marginLeft: 20 , width:'88%'}}>
                        <ScrollView horizontal={true}>
                        <View style={{ width: 120 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => setData({ view: 'gloriosos', title: 'Gloriosos'})} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 2 , width:250}}>Misterios Gloriosos  <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5, width: 120 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => setData({ view: 'gozosos', title: 'Gozosos'})} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 2 ,width:250 }}>Misterios Gozosos  <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5, width: 125 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => setData({ view: 'luminosos', title: 'Luminosos'})} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 1, width:250 }}>Misterios Luminosos <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 5, width: 120 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => setData({ view: 'dolorosos', title: 'Dolorosos'})} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 1,width:250 }}>Misterios Dolorosos <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={{ ...styles.normalText, marginLeft: 5, fontSize: 20, marginBottom:'10%' }}>
                            Misterios {data.title}
                        </Text>
                    </View>
                    <RosarioAccordion view={data.view} />
                </ScrollView>
            </SafeAreaView>
        )
}

const styles = {
    ...commonFontStyle,
    cardContainer: {
        flex: 1,
        zIndex: 2,
        top: '-5%',
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    }
}