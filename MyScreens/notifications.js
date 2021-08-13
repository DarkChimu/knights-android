import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Linking
} from 'react-native'

import BottomNav from '../MyComponents/bottomNav'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'


export default function NotificationScreen() {
  const navigation = useNavigation()

    const [data, setData] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await AsyncStorage.getItem('Notification')
        const dataJSON = fetchData != null ? await JSON.parse(fetchData) : null
        const reversed = await dataJSON.notifications.reverse()
        setData( reversed )
  
      } catch (e) {
        console.log(e)
      }

    }
    getData()
  }, [])


   const pressedNoty = async payload => {

    const { id, screen, link } = payload
    const updateNotyState = await data.map( async element => {
      if (element.id === id) {
        element.seen = 1
        await AsyncStorage.getItem('Notification', (_err, noti) => {
          const notiJSON = JSON.parse(noti)
          let aux = data

          AsyncStorage.setItem('Notification', JSON.stringify({
            notifications: aux.reverse()
          }))
        })
      }
      return
    })

    if (screen) {
      navigation.navigate(screen)
    } else if (link) {
      Linking.openURL(link)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ ...styles.root, paddingTop: 24 }}
        data={data}
        extraData={data}
        ItemSeparatorComponent={() => {
          return (

            <View style={styles.separator} />
          )
        }}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={item => {
          const Notification = item.item
          let attachment = <View />

          let mainContentStyle
          if (Notification.attachment) {
            mainContentStyle = styles.mainContent
            attachment = <Image style={styles.attachment} source={{ uri: Notification.attachment ? Notification.attachment : null }} />
          }

          return (

            <Pressable android_ripple={{ color: '#bfdcff' }} style={{ ...styles.container, backgroundColor: Notification.seen === 1 ? 'white' : '#fffaf0'}} onPress={() => pressedNoty({ id: Notification.id, screen: Notification.screen, link: Notification.link, seen: Notification.seen })}>
              <Image source={{ uri: Notification.image ? Notification.image : null }} style={styles.avatar} />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>
                    {moment(Notification.date).startOf('hour').fromNow()}
                </Text>
                </View>
                {attachment}
              </View>
            </Pressable>
          )
        }} />
        
      <BottomNav />

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF'
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'flex-start'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontFamily: 'Nunito-Regular'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  },
  timeAgo: {
    fontSize: 12,
    color: '#696969'
  },
  name: {
    fontSize: 16,
    color: '#0D2A4E',
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold'
  }
})
