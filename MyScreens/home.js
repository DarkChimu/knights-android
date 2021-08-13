import React, { Component, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { hideNavigationBar } from 'react-native-navigation-bar-color'
import { Badge } from 'react-native-elements'

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import NotificationButton from '../MyComponents/Notify'
import BottomNav from '../MyComponents/bottomNav'
import { Linking } from 'react-native'
import ExternalLink from '../MyComponents/ExternalLink'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-paper';
import { Alert } from 'react-native'
import axios from 'axios'

var logo = require('../src/logo-1.png')
var notifi = require('../src/notifications.png')
var art = require('../src/banner_web.png')
var intencion = require('../src/captura.png')
var rosario = require('../src/rosario_card.png')
var rosarioHeader = require('../src/rosario_sections.jpg')
var radioCard = require('../src/banner_rad.png')
var evangelioCard = require('../src/evangelio_card.png')
var santosCard = require('../src/santos_card.png')
var oracionOne = require('../src/manana_one.png')
var oracionTwo = require('../src/oracion_jesus.png')
var oracionthree = require('../src/oracion_maria.png')
var oracionFour = require('../src/oracion_miguel.png')
var oracionFive = require('../src/fatima_five.png')
var oracionSix = require('../src/oracion_consa.png')
var iglesia = require('../src/iglesia_fatima.png')
var oracionSeven = require('../src/angelus_seven.png')
var oracionEight = require('../src/noche_eight.png')

export default function HomeScreen(props) {
  const [userName, setUserName] = React.useState('')
  const [userEmail, setUserEmail] = React.useState('')
  const navigation = useNavigation()

  const [count, setCount] = useState(true)
  
  useEffect(() => {
    const getData = async () => {
      let notifyCount = 0
      try {
        const fetchData = await AsyncStorage.getItem('Notification')
        const dataJSON = fetchData != null ? await JSON.parse(fetchData) : null
        dataJSON.notifications.map((el, index) => {
          if (el.seen === 0) {
            notifyCount++
          }
        })

        setCount(notifyCount)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [count])

  const sendNewsletterInfo = async params => {
    const api_token = 'XRLhDTR7J3zZ8zYcFC9HkXgfnBtKeSclSpQO6LFcf5YWoeYP3a9a7B8WVmXG'
    const { email, first_name } = params

    try {
      const res = await axios({
        method: 'post',
        url: 'https://caballerosdelavigen.cloud.mumara.com/api/addContact',
        headers: {
          'Authorization': `Bearer ${api_token}`,
          'Content-Type': 'application/json'
          /* Authorization: Array([
            'Content-Type: application/json', 'Authorization: Bearer ' + api_token
          ]) */
        },
        data: { list_id: 14, email, first_name, response: 1 },
        responseType: 'json'

      })
      
      console.log(res.data.result)

      if (res.data.status === 'success') {
        Alert.alert('¡Gracias por Suscribirte!')
      }

      return true
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 40 }} />
        <Badge value={count >= 9 ? '9+' : `${count}`} status="error" containerStyle={{ zIndex: 4, position: 'absolute', top: '2%', right: '6%' }}
        />
        <NotificationButton
          style={{ zIndex: 3, height: 50, width: 50 }}
          onPress={() => navigation.navigate('Notifications')}
        />

        {/* <TouchableOpacity onPress={() => Alert.alert('image clicked')} >
        <Image source={notifi}  
        style={{height:50, width:50}} 
        onPress={() => Alert.alert('Autenticar y enviar a Home ')}        
        style={{height:50, width:50, margin:0 ,marginLeft:'auto' , marginBottom:-50, marginRight:15}}></Image>
        </TouchableOpacity> */}


<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={logo}
            style={{ height: 80, width: 200, margin: 20 }} />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.boldText}> ¡ Salve María !</Text>

        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'justify' }}>
          <Text style={styles.normalText}
          >Bienvenido, gracias por unirte a la comunidad de los Caballeros de la Virgen.</Text>
        </View>

        <View style={styles.cardContainertwo}>
          <Image source={rosarioHeader}
            style={{ height: 210, width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Rosario')}>
            <Text style={styles.TitleText}> Santo Rosario </Text>
            <Icon style={{ color: 'red', right: '50%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
          <Text style={styles.CardText}>La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.</Text>
        </View>

        <ExternalLink link="https://caballerosdelavirgen.org/intencion/" style={{ }}>
          <Image source={intencion}
            style={{ height: 160, width: '90%', borderRadius: 20 , marginStart:20}}
          />
        </ExternalLink>


        

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.boldText}> Oraciones </Text>
        </View>

        <ScrollView horizontal={true}>


          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/oracion-de-la-manana/">
            <View style={{ height: 150, width: 170, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionOne}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />


              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
              <Text style={styles.iconsText}>Oración de la mañana</Text>
            </View>
          </ExternalLink>


          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/oracion-a-jesus-sacramentado/">
            <View style={{ height: 150, width: 170, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionTwo}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> Oración a Jesús Sacramentado </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/destaque/coronilla-a-san-miguel-arcangel/">
            <View style={{ height: 150, width: 180, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionFour}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> Coronilla a San Miguel Arcángel</Text>
            </View>
          </ExternalLink>


          <ExternalLink link="https://caballerosdelavirgen.org/destaque/novena-a-nuestra-senora-de-fatima/">
            <View style={{ height: 150, width: 180, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionFive}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> Novena a Nuestra Señora de Fátima </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/consagracion-al-espiritu-santo/">
            <View style={{ height: 150, width: 180, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionSix}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> Consagración al Espíritu Santo </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/angelus/">
            <View style={{ height: 150, width: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionSeven}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> El             Ángelus </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/confianza-en-maria/">
            <View style={{ height: 150, width: 160, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionEight}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> Oración de la noche </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/">
            <View style={{ height: 150, width: 180, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={oracionthree}
                style={{ height: 85, width: 85, borderRadius: 20, margin: 10 }} />
              <Text style={styles.iconsText}> Oraciones a Maria Santísima </Text>
            </View>
          </ExternalLink>

        </ScrollView>


        <View style={styles.cardContainer}>
          <Image source={evangelioCard}
            style={{ height: 170, width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Evangelio')}>
            <Text style={styles.TitleText}> Evangelio del día </Text>
            <Icon style={{ color: 'red', right: '50%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
        </View>

        <View style={styles.cardContainer}>
          <Image source={santosCard}
            style={{ height: 190, width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Santo')}>
            <Text style={styles.TitleText}> Santo del día </Text>
            <Icon style={{ color: 'red', right: '50%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
        </View>




        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />

        <View style={styles.cardContainer}>
          <Image source={iglesia}
            style={{ height: 150, width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Iglesia')}>
            <Text style={styles.TitleText}> Iglesia Nuestra Señora de Fátima </Text>
            <Icon style={{ color: 'red', right: '30%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
          <Text style={styles.CardText}>Conoce la ubicación de nuestra iglesia y los horarios de las misas que tenemos disponibles.</Text>
        </View>
        
        
        <View style={styles.cardContainer}>
          <Image source={radioCard}
            style={{ height: 110, width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Radio')}>
            <Text style={styles.TitleText}> Radio Caballeros </Text>
            <Icon style={{ color: 'red', right: '50%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
        </View>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.boldText}> Artículos </Text>
        </View>

        <ExternalLink link="https://caballerosdelavirgen.org/">
          <Image source={art}
            style={{ height: 167, width: '90%', borderRadius: 20 , marginStart:20}}
          />
        </ExternalLink>
        <View style={{padding:20}} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={styles.boldText}> Suscribete a Nuestro Newsletter </Text> */}
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.boldTextwo}> Suscríbete a los  caballeros de la virgen </Text>

          <TextInput style={{...styles.input, textAlign: 'center' }}
            underlineColorAndroid="transparent"
            placeholder=" ¿Cómo te llamas? "
            placeholderTextColor="#0D2A4E"
            autoCapitalize="none"
            onChangeText={word => setUserName(word)} />


          <TextInput style={{...styles.input, marginTop: '1%', textAlign: 'center' }}
            underlineColorAndroid="transparent"
            placeholder=" Email "
            placeholderTextColor="#0D2A4E"
            autoCapitalize="none"
            onChangeText={word => setUserEmail(word)} />

          <TouchableOpacity
            style={{ ...styles.submitButton, marginTop: '1%' }}
            onPress={
              () => sendNewsletterInfo({ 
                email: userEmail.trim().toLowerCase(), 
                first_name: userName.trim()
              })
            }>
            <Text style={{ ...styles.submitButtonText, textAlign: 'center'}}> Suscribirse </Text>
            </TouchableOpacity>

        </View>
        <View style={{ padding: 120 }} />
      </ScrollView>
      <BottomNav screen={'home'} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: '#FFFFFF'
  },
  separator: {
    marginTop: 10
  },
  input: {
    margin: 15,
    height:30,
    width:'60%',
    borderColor: '#0D2A4E',
    borderWidth: 1,
    borderRadius:20,
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    color:'orange'
 },
 submitButton: {
  width:'60%',
  backgroundColor: '#0D2A4E',
  padding: 10,
  margin: 15,
  height: 40,
  borderRadius: 20
},
submitButtonText:{
  color: 'white'
},
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white'
  },
  boldText: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0D2A4E',
    padding: 10
  },
  boldTextwo: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#0D2A4E',
    padding: 10
  },
  boldTextIglesia: {
    marginTop: 10,
    marginBottom: -10,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0D2A4E',
    padding: 10
  },
  iglesiaText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0D2A4E',
    padding: 10
  },
  normalText: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginBottom: 15,
    marginRight: 20,
    padding: 20,
    fontWeight: 'normal',
    fontSize: 16,
    color: '#0D2A4E',
    fontFamily: 'Nunito-Regular'
  },
  TitleText: {

    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0D2A4E',
    marginTop: 10,
    textAlign: 'center',
    marginRight: 'auto',
    marginStart: 20,
    padding: 5
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 30,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 20
  },
  cardContainertwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 30,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom:20
  },
  CardText: {
    textAlign: 'left',
    marginBottom: 15,
    marginRight: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontWeight: 'normal',
    fontSize: 14,
    color: '#0D2A4E',
    fontFamily: 'Nunito-Regular'


  },
  iconsText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginBottom: 15,
    marginRight: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 14,
    color: '#0D2A4E',
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold'


  },
  SeemoreText: {
    textAlignVertical: 'center',
    textAlign: 'left',
    marginBottom: 15,
    marginRight: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontWeight: 'normal',
    fontSize: 14,
    color: '#D10D0D',
    fontFamily: 'Nunito-Regular',
    marginLeft: 'auto',
    textDecorationLine: 'underline'


  },


  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#EEEEEE'
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1
  },
  description: {
    fontSize: 15,
    color: '#888',
    flex: 1,
    marginTop: 5,
    marginBottom: 5
  },
  time: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5
  },
  icon: {
    width: 25,
    height: 25
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5
  },
  timeContainer: {
    flexDirection: 'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
