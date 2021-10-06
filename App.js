import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'
import messaging from '@react-native-firebase/messaging'
import stateProvider from './helpers/stateProvider'
import MyDrawer from './MyDrawer'

export default function App(){
  stateProvider()

  useEffect(() => {

    const storeFirstNoty = async value => {
      await AsyncStorage.setItem('Notification', JSON.stringify({
        notifications: [
          {
            id: value.messageId,
            name: value.notification.title || '',
            text: value.notification.body || '',
            image: value.notification.android.imageUrl || '',
            attachment: value.data.attachment || '',
            date: Date.now(),
            seen: 0,
            screen: value.data.screen || undefined,
            link: value.data.link || undefined
          }
        ]
      }))
    }

    const pushNewNoty = async value => {
      await AsyncStorage.getItem('Notification', (_err , noti) => {
        const notiJSON = JSON.parse(noti)
        let aux = notiJSON.notifications
        try {
          aux.push({
            id: value.messageId,
            name: value.notification.title || '',
            text: value.notification.body || '',
            image: value.notification.android.imageUrl || '',
            attachment: value.data.attachment || '',
            date: Date.now(),
            seen: 0,
            screen: value.data.screen || undefined,
            link: value.data.link || undefined
          })
          
           AsyncStorage.setItem('Notification', JSON.stringify({
            notifications: aux
          }))
        } catch (err) {
          console.log(err)
        }
      })
    }

    const foregroundSubscriber = messaging().onMessage(async remoteMessage => {
      console.log('Push Notification Received')

      const currentItems = await AsyncStorage.getItem('Notification')

      !currentItems ? storeFirstNoty(remoteMessage) : pushNewNoty(remoteMessage)

    })

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Push notification en background')
  
      const currentItems = await AsyncStorage.getItem('Notification')

      !currentItems ? storeFirstNoty(remoteMessage) : pushNewNoty(remoteMessage)
    })

    return () => {
      foregroundSubscriber()
    }
  }, [])

  return (
    <PaperProvider>
      <MyDrawer/>
    </PaperProvider>
  )
}
