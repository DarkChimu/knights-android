import React, {useEffect, useState} from 'react'
import {
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    SafeAreaView,
    Share
  } from 'react-native'

import { parse } from 'fast-xml-parser'
import { useNavigation } from '@react-navigation/native'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/santo-2.png')

export default function Santo(props) {
    const navigation = useNavigation()

    const [data, setData] = useState({ info: {}, isFetching: false })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData({ info: data.info, isFetching: true })
                const response = await fetch('http://feeds.feedburner.com/aciprensa-santodeldia')
                const responseText = await response.text()
                const responseJSON = await parse(responseText)

                const { item } = responseJSON.rss.channel

                setData({
                    info: {
                        title: item[0].title,
                        description: item[0].description,
                        pubDate: item[0].pubDate
                    },
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
              'React Native | A framework for building native apps using React',
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
            <View style={{ marginTop:40 }} />
            <ScrollView>
                <View style={{ zIndex: 1 }}>
                    <Image source={bg} style={{ minWidth: '100%', width: '100%' }} />
                </View>
                <View style={{ zIndex: 2, position: 'absolute', top: 35, left: 10 }} >
                    <Icon.Button
                        name="chevron-left"
                        size={25}
                        borderRadius={50}
                        backgroundColor="transparent"
                        color="#0D2A4E"
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                <View style={{ zIndex: 2, position: 'absolute', top: 35, right: 10, flexDirection: 'row', backgroundColor:'white', borderRadius: 20 }} >
                    <Text style={{ top: 11, left: 10}}>
                        Siguiente
                    </Text>
                    <Icon.Button
                        name="chevron-right"
                        size={25}
                        borderRadius={50}
                        backgroundColor="transparent"
                        iconStyle={{ right: '-30%'}}
                        color="#0D2A4E"
                        onPress={()=> Alert.alert('Back Button Pressed')}
                    />
                </View>
                <View style={{ ...styles.cardContainer, position: 'absolute' ,marginVertical: 0, paddingBottom: 2, alignItems: 'flex-end', height: 65 ,top: 190, width: '100%', backgroundColor:'#f3f3f3' }} >
                    <Icon
                        name="share-alt" size={16}
                        onPress={onShare}
                    />
                </View>
                <View>
                    <Text style={{ ...styles.boldText, ...styles.santoTitle }}>
                        {data.info.title}
                    </Text>
                </View>
                <View style={{ paddingVertical: 0, marginTop: '-10%', marginLeft: 5 }}>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0 }}>
                        {data.info.pubDate}
                    </Text>
                </View>
                <View>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, textAlign: 'justify', fontSize: 12 }}>
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
        fontSize: 20, 
        zIndex: 3, 
        marginVertical: 0, 
        paddingVertical: 10, 
        marginLeft: 3, 
        top: '-40%'
    }
}