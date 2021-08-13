import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

var notifi = require('../src/notifications.png')
export default function NotificationButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Icon name="bell" size={25} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height:50,

    marginRight:15,
    marginLeft:'auto',
    width:50,
    marginBottom:5,
    padding:5,
    borderRadius: 20,
    paddingVertical: 5,
    backgroundColor: "#f3f3f3",
  },

    bell: {
    height:50,
    width:50,
    

  }

})