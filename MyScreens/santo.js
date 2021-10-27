import React, {useEffect, useState} from 'react'
import {
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    SafeAreaView,
    Share,
    Dimensions
  } from 'react-native'

  import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
  import moment from 'moment'
  import 'moment/locale/es'

import { parse } from 'fast-xml-parser'
import { useNavigation } from '@react-navigation/native'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/santos_header.png')

moment.locale('es')

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Santo(props) {
    const navigation = useNavigation()

    const [data, setData] = useState({ info: {}, item: [], isFetching: false })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData({ info: data.info, item: [], isFetching: true })
                const response = await fetch('http://feeds.feedburner.com/aciprensa-santodeldia')
                const responseText = await response.text()
                const responseJSON = await parse(responseText)

                const { item } = responseJSON.rss.channel

                console.log(item[0].title.length)

                setData({
                    info: {
                        title: item.title || item[0].title,
                        description: item.description || item[0].description,
                        pubDate: item.pubDate || item[0].pubDate
                    },
                    item : item,
                    isFetching: false
                })
            } catch (e) {
                console.log(e)
                setData({ info: data.info, isFetching: false })
            }
        }
        fetchData()
    }, [])

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Compartir en:'
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

    const renderNextSanto = next => {
        if (Array.isArray(next)) {
            return <View style={{ zIndex: 2, position: 'absolute', top: 35, right: 10, flexDirection: 'row', backgroundColor: 'white', borderRadius: 20 }} >
                <Text style={{ top: '5%', left: '5%' }}>
                    Siguiente
                </Text>
                <Icon
                    name="chevron-right"
                    size={25}
                    borderRadius={50}
                    backgroundColor="transparent"
                    iconStyle={{ right: '-30%' }}
                    color="#0D2A4E"
                    onPress={() => Alert.alert('Back Button Pressed')}
                />
            </View>
        }

        return
    }
    return (
        <SafeAreaView>
            <View style={{ paddingTop: 24 }} />
            <ScrollView style={{ backgroundColor: 'white'}}>
                <View style={{ zIndex: 1 }}>
                    <Image source={bg} style={{ minWidth: '100%', width: '100%', height: verticalScale(250) }} />
                </View>
                <View style={{ zIndex: 2, position: 'absolute', top: verticalScale(45), left: scale(15) }} >
                    <Icon
                        name="chevron-left"
                        size={25}
                        borderRadius={50}
                        backgroundColor="transparent"
                        color="white"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                <Text style={{ ...commonFontStyle.titleText, color: 'white', zIndex: 2, position: 'absolute', top: verticalScale(30), left: scale(15) }}>Volver</Text>
                <View style={{ ...styles.cardContainer, zIndex: 1, backgroundColor: 'white', position: 'absolute' ,marginVertical: 0, paddingBottom: 2, alignItems: 'flex-end', height: verticalScale(65) ,top: verticalScale(225), width: '100%' }} >
                    <Icon
                        name="share-alt" size={16}
                        onPress={onShare}
                    />
                </View>
                <View>
                    <Text style={{ ...styles.boldText, ...styles.santoTitle, zIndex: 10, fontSize: windowWidth <= Number('720') ? scale(16) : scale(25), top: '-40%' }}>
                        {data.info.title}
                    </Text>
                </View>
                <View style={{ paddingVertical: 0, marginLeft: 5, flex: 1, alignItems: 'center' }}>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, fontSize:16 }}>
                        {(moment().format('LLLL').toUpperCase())}
                    </Text>
                </View>
                <View  style={{ flex: 1, alignItems: 'center'}}>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, textAlign: 'justify', fontSize: 16 }}>
                        {data.info.description}
                    </Text>
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
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    santoTitle: {
        fontSize: 25, 
        zIndex: 3, 
        marginVertical: 0, 
        paddingVertical: 10, 
        marginLeft: 3
    }
}