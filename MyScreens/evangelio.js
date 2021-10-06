import React, {useEffect, useState} from 'react'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    Share
  } from 'react-native'

import { parse } from 'fast-xml-parser'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import Icon from 'react-native-vector-icons/FontAwesome5'
const bg = require('../src/evangelio_section.png')


const windowWidth = Dimensions.get('window').width

export default function Evangelio(props) {
    const navigation = useNavigation()

    const [data, setData] = useState({ info: {}, isFetching: false })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData({ info: data.info, isFetching: true })
                const response = await fetch('https://www.ciudadredonda.org/rss/lecturas-evangelio-dia.xml')
                const responseText = await response.text()
                const responseJSON = await parse(responseText)

                const { item } = responseJSON.rss.channel

                let find = '</b>'
                let find2 = '<b>'
                var regex = new RegExp(find, 'g')
                var regex2 = new RegExp(find2, 'g')

                setData({
                    info: {
                        title: item.title,
                        description: item.description.replace(regex, '').replace(regex2, ''),
                        pubDate: item.pubDate
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
            <View style={{ zIndex: 1, marginTop: 50 }}>
            <Image source={bg} style={{ minWidth: '100%', width: '100%' }} />
            </View>

                <View style={{ ...styles.container, paddingBottom: 58, borderTopStartRadius:20, borderTopEndRadius: 20, marginTop: -20, zIndex: 1}}>
                    <View style={{ flexDirection: 'row', zIndex: 1 }}>
                        <Icon.Button
                            name="chevron-left"
                            size={30}
                            iconStyle={{ marginLeft: windowWidth * 0.03 , marginRight: 0, marginTop: 19 }}
                            backgroundColor="transparent"
                            onPress={() => navigation.navigate('Home')}
                        />
                        <Text style={{ ...styles.boldText, color: 'white', marginTop: 15 }}>
                            Evangelio del día
                        </Text>

                        <Icon.Button
                            name="share-alt"
                            size={20}
                            iconStyle={{ marginLeft: windowWidth * 0.23, marginRight: 0, marginTop: 19 }}
                            borderRadius={1}
                            backgroundColor="transparent"
                            color="#FEFFFE"
                            onPress={onShare}
                        />
                    </View>
                    <Text style={{ ...styles.normalText, paddingVertical: 0, marginVertical: 0, color:'white', paddingBottom:0, fontSize:16 }}>
                        {data.info.title}
                        </Text>
                    <View>
                        <Text style={{ ...styles.normalText, color: 'white', marginTop: 0, paddingBottom: 120, fontSize:16}}>
                            {data.info.description}
                        </Text>

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
        backgroundColor: '#0D2A4E'
    }
}
