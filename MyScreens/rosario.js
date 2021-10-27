import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Dimensions,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Share
  } from 'react-native'

import AudioPlayer from '../MyComponents/audioplayer'

import { scale, verticalScale } from 'react-native-size-matters'

import moment from 'moment'
import 'moment/locale/es'
import RosarioAccordion from '../MyComponents/RosarioAccordion'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/rosario_header.png')
const gloriosos = require('../src/gloriososThub.jpg')
const gozosos = require('../src/gozososThub.jpg')
const luminosos = require('../src/luminososThub.jpg')
const dolorosos = require('../src/dolorososThub.jpg')

moment.locale('es')

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Rosario(props) {
    console.log(windowHeight)
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
            // dismissedq
          }
        } catch (error) {
          console.log(error.message)
        }
      }

        return (
            <SafeAreaView>
                <ScrollView style={{ height: '100%', width: windowWidth }}>
                    <View style={{ zIndex: 1, marginTop: 24 }}>
                        <Image source={bg} style={{ minWidth: '100%', width: '100%' }} />
                    </View>
                    <View style={{ zIndex: 2, position: 'absolute', top: verticalScale(60), left: scale(15) }} >
                        <Icon
                            name="chevron-left"
                            size={25}
                            borderRadius={50}
                            backgroundColor="transparent"
                            color="white"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                        <Text style={{ ...commonFontStyle.titleText, color: 'white', zIndex: 2, position: 'absolute', top: verticalScale(45), left: scale(15) }}>Volver</Text>
                    <View style={{ ...styles.cardContainer, position: 'absolute' , paddingBottom: 2, alignItems: 'flex-end', height: verticalScale(65) ,top: windowHeight < Number('683') ? verticalScale(335) : verticalScale(275), width: windowWidth }} >
                        <Icon
                            name="share-alt" size={16}
                            onPress={onShare}
                        />
                    </View>
                    <View>
                        <Text style={{ ...styles.boldText, zIndex: 3, marginVertical: 0, paddingVertical: 0, marginLeft: 15, top: (((windowHeight * 0.07) * -1)), width: windowWidth}}>
                            Santo Rosario 
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 0, marginTop: ((windowHeight * 0.05) * -1), marginLeft: 15 }}>
                        <Text style={{ ...styles.normalText, paddingVertical: 0, textAlign: 'center', marginVertical: 0, fontSize: 16}}>
                            {(moment().format('LLLL').toUpperCase())}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, textAlign: 'justify', fontSize: 16 }}>
                            La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre, particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.
                        </Text>
                    </View>
                    {/* <View style={{ flex: 1, flexDirection: "row", marginLeft: 20 , width:'88%'}}>
                        <ScrollView horizontal={true}>
                        <View style={{ width: scale(120) }}>
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
                        <View style={{ marginLeft: 5, width: scale(120) }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#3d7cc0' }}
                                onPress={() => setData({ view: 'dolorosos', title: 'Dolorosos'})} >
                                <Text style={{ color: 'white', fontSize: 12, paddingVertical: 10, paddingHorizontal: 1,width:250 }}>Misterios Dolorosos <Icon name="cross" color="white" /></Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </View> */}

                    <View style={{ marginTop: '10%' }}>
                     <View style={{ width: windowWidth, height: verticalScale(210) }}>
                         <Image source={gloriosos} style={{ height: '100%', width: '100%' }} />
                     </View>
                            <AudioPlayer track={'1'} />
                            <View style={{ width: scale(350) }}>
                                <Text style={{ ...styles.normalText, marginLeft: 5 }}>
                                    * Rezar la Salve. {'\n'}{'\n'}
                                    * Se puede rezar las Letanías Lauretanas al final de {'\n'}   todo el Rosario.
                                </Text>
                            </View>
                    </View>
                    <View style={{ }}>
                     <View style={{ width: windowWidth, height: verticalScale(220) }}>
                         <Image source={gozosos} style={{ height: '100%', width: '100%' }} />
                     </View>
                            <AudioPlayer track={'1'} />
                            <View style={{ width: scale(350) }}>
                                <Text style={{ ...styles.normalText, marginLeft: 5 }}>
                                    * Rezar la Salve. {'\n'}{'\n'}
                                    * Se puede rezar las Letanías Lauretanas al final de {'\n'}   todo el Rosario.
                                </Text>
                            </View>
                    </View>
                    <View style={{  }}>
                     <View style={{ width: windowWidth, height: verticalScale(220) }}>
                         <Image source={luminosos} style={{ height: '100%', width: '100%' }} />
                     </View>
                            <AudioPlayer track={'2'} />
                            <View style={{ width: scale(350) }}>
                                <Text style={{ ...styles.normalText, marginLeft: 5 }}>
                                    * Rezar la Salve. {'\n'}{'\n'}
                                    * Se puede rezar las Letanías Lauretanas al final de {'\n'}   todo el Rosario.
                                </Text>
                            </View>
                    </View>
                    <View style={{ }}>
                     <View style={{ width: windowWidth, height: verticalScale(220) }}>
                         <Image source={dolorosos} style={{ height: '100%', width: '100%' }} />
                     </View>
                            <AudioPlayer track={'4'} />
                            <View style={{ width: scale(350) }}>
                                <Text style={{ ...styles.normalText, marginLeft: 5 }}>
                                    * Rezar la Salve. {'\n'}{'\n'}
                                    * Se puede rezar las Letanías Lauretanas al final de {'\n'}   todo el Rosario.
                                </Text>
                            </View>
                    </View>
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