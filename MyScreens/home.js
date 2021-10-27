import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import { Badge } from 'react-native-elements'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

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
import ExternalLink from '../MyComponents/ExternalLink'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-paper'
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


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function HomeScreen(props) {
  const [userName, setUserName] = React.useState('')
  const [userEmail, setUserEmail] = React.useState('')
  const navigation = useNavigation()

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const getData = async () => {
      let notifyCount = 0
      try {
        const fetchData = await AsyncStorage.getItem('Notification')
        const dataJSON = fetchData != null || undefined ? await JSON.parse(fetchData) : {}
        await dataJSON.notifications.map((el, index) => {
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
        <Badge value={count >= 9 ? '9+' : `${count}`} status="error" containerStyle={{ zIndex: 4, position: 'absolute', top: (windowHeight * 0.09) , right: (windowWidth * 0.06) }}
        />
        <NotificationButton
          style={{ zIndex: 3, height: verticalScale(50), width: scale(50) }}
          onPress={() => navigation.navigate('Notifications')}
        />

        {/* <TouchableOpacity onPress={() => Alert.alert('image clicked')} >
        <Image source={notifi}  
        style={{height:50, width:50}} 
        onPress={() => Alert.alert('Autenticar y enviar a Home ')}        
        style={{height:50, width:50, margin:0 ,marginLeft:'auto' , marginBottom:-50, marginRight:15}}></Image>
        </TouchableOpacity> */}


<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: verticalScale(80) }}>
          <Image source={logo}
            style={{ height: windowHeight > 1440 ? '120%' : '130%', width: windowWidth > 720 ? scale(200) : scale(250) }} />
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
            style={{ height: verticalScale(210), width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: ((windowHeight * 0.01) * -1), alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Rosario')}>
            <Text style={styles.TitleText}> Santo Rosario </Text>
            <Icon style={{ color: 'red', right: '50%', top: ((windowHeight * 0.01) * -1) }} size={20} name="chevron-right" />
          </Pressable>
          <Text style={styles.CardText}>La oración más poderosa ante Dios es la que hacemos a través de su Santísima Madre,particularmente el Rosario, en él oramos como nos enseñó y contemplamos la vida de Jesús.</Text>
        </View>

        <ExternalLink link="https://caballerosdelavirgen.org/intencion/">
          <View style={styles.cardContainertwo}>
            <Image source={intencion}
              style={{ height: verticalScale(140), width: scale(318), borderRadius: 20 }}
            />
          </View>
        </ExternalLink>


        

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.boldText}> Oraciones </Text>
        </View>

        <ScrollView horizontal={true}>


          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/oracion-de-la-manana/">
            <View style={{...styles.externalView }}>
              <Image source={oracionOne}
                style={styles.oracionImage} />
                <Text style={styles.iconsText}>Oración de la mañana</Text>
            </View>
          </ExternalLink>


          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/oracion-a-jesus-sacramentado/">
            <View style={styles.externalView}>
              <Image source={oracionTwo}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> Oración a Jesús Sacramentado </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/destaque/coronilla-a-san-miguel-arcangel/">
            <View style={styles.externalView}>
              <Image source={oracionFour}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> Coronilla a San Miguel Arcángel</Text>
            </View>
          </ExternalLink>


          <ExternalLink link="https://caballerosdelavirgen.org/destaque/novena-a-nuestra-senora-de-fatima/">
            <View style={styles.externalView}>
              <Image source={oracionFive}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> Novena a Nuestra Señora de Fátima </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/consagracion-al-espiritu-santo/">
            <View style={styles.externalView}>
              <Image source={oracionSix}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> Consagración al Espíritu Santo </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/angelus/">
            <View style={styles.externalView}>
              <Image source={oracionSeven}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> El Ángelus </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/confianza-en-maria/">
            <View style={styles.externalView}>
              <Image source={oracionEight}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> Oración de la noche </Text>
            </View>
          </ExternalLink>

          <ExternalLink link="https://caballerosdelavirgen.org/oraciones-y-devociones/">
            <View style={{...styles.externalView}}>
              <Image source={oracionthree}
                style={styles.oracionImage} />
              <Text style={styles.iconsText}> Oraciones a Maria Santísima </Text>
            </View>
          </ExternalLink>

        </ScrollView>


        <View style={styles.cardContainer}>
          <Image source={evangelioCard}
            style={{ height: verticalScale(190), width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Evangelio')}>
            <Text style={styles.TitleText}> Evangelio del día </Text>
            <Icon style={{ color: 'red', right: '50%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
        </View>

        <View style={styles.cardContainer}>
          <Image source={santosCard}
            style={{ height: verticalScale(190), width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: '-1%', alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Santo')}>
            <Text style={styles.TitleText}> Santo del día </Text>
            <Icon style={{ color: 'red', right: '50%', top: '-2%' }} size={20} name="chevron-right" />
          </Pressable>
        </View>




        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />

        <View style={styles.cardContainer}>
          <Image source={iglesia}
            style={styles.pageImage} />
          <Pressable style={{ width: '100%', top: ((windowHeight * 0.01) * -1), alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Iglesia')}>
            <Text style={{...styles.TitleText, textAlign: 'left'}}> Iglesia Nuestra Señora {'\n'} de Fátima </Text>
            <Icon style={{ color: 'red', right: (windowWidth * 0.03), top: ((windowHeight * 0.045) * -1) }} size={20} name="chevron-right" />
          </Pressable>
          <Text style={styles.CardText}>Conoce la ubicación de nuestra iglesia y los horarios de las misas que tenemos disponibles.</Text>
        </View>
        
        
        <View style={styles.cardContainer}>
          <Image source={radioCard}
            style={{ height: verticalScale(95), width: '100%', borderRadius: 20 }} />
          <Pressable style={{ width: '100%', top: ((windowHeight * 0.01) * -1), alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => navigation.navigate('Radio')}>
            <Text style={styles.TitleText}> Radio Caballeros </Text>
            <Icon style={{ color: 'red', right: '50%', top: ((windowHeight * 0.01) * -1) }} size={20} name="chevron-right" />
          </Pressable>
        </View>
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.boldText}> Artículos </Text>
        </View>

        <ExternalLink link="https://caballerosdelavirgen.org/">
          <Image source={art}
            style={{ height: scale(150), width: '90%', borderRadius: 20, marginLeft: 20 }}
          />
        </ExternalLink>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
          <Text style={{ ...styles.boldTextwo, textAlign: 'center' }}> Suscríbete a los {'\n'} Caballeros de la Virgen </Text>

          <TextInput style={{...styles.input, textAlign: 'center' }}
            underlineColorAndroid="transparent"
            placeholder=" ¿Cómo te llamas? "
            placeholderTextColor="#0D2A4E"
            autoCapitalize="none"
            onChangeText={word => setUserName(word)} />


          <TextInput style={{...styles.input, marginTop: ((windowHeight * 0.01) * -1), textAlign: 'center' }}
            underlineColorAndroid="transparent"
            placeholder=" Email "
            placeholderTextColor="#0D2A4E"
            autoCapitalize="none"
            onChangeText={word => setUserEmail(word)} />

          <TouchableOpacity
            style={{ ...styles.submitButton, marginTop: ((windowHeight * 0.01) * -1) }}
            onPress={
              () => sendNewsletterInfo({ 
                email: userEmail.trim().toLowerCase(), 
                first_name: userName.trim()
              })
            }>
            <Text style={{ ...styles.submitButtonText, textAlign: 'center'}}> Suscribirse </Text>
            </TouchableOpacity>

        </View>
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
    height: verticalScale(30),
    width: scale(windowWidth * 0.60),
    borderColor: '#0D2A4E',
    borderWidth: 1,
    borderRadius:20,
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    color:'orange'
 },
 submitButton: {
  width: scale(windowWidth * 0.60),
  backgroundColor: '#0D2A4E',
  padding: 10,
  margin: 15,
  height: verticalScale(40),
  borderRadius: 20
},
submitButtonText:{
  color: 'white'
},
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: scale(2)
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
    width: scale(25),
    height: verticalScale(25)
  },
  iconData: {
    width: scale(15),
    height: verticalScale(15),
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
  },
  externalView: {
    height: verticalScale(150), 
    width: scale(170), 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  oracionImage: {
    height: 85, 
    width: 85, 
    borderRadius: 20, 
    marginBottom: 10
  },
  pageImage: {
    height: verticalScale(190), 
    width: '100%', 
    borderRadius: 20
  }
})
