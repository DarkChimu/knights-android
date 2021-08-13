import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import BottomNav from '../MyComponents/bottomNav'
import commonFontStyle from '../styles/fonts/fontStyleProvider'
import { Linking } from 'react-native';
import ExternalLink from '../MyComponents/ExternalLink'

const location = require('../src/contact-location.png')
const location2 = require('../src/contact-location-2.png')
const location3 = require('../src/iglesiamap.png')
const location4 = require('../src/iglesia_section.png')

const logo = require('../src/logo-1.png')

export default class iglesiaScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, paddingTop: 24 }}>
                        <Image
                            source={logo}
                            style={{ height: 80, width: 200, margin: 20 }} />
                    </View>

                    <View style={{ width: '100%' }}>
                        <Text style={{ ...styles.boldText, marginLeft: 15, padding:10 }}>
                            Iglesia Nuestra Señora de Fatima
                        </Text>
                        <Image
                            source={location4}
                            style={{ width:'100%', height: 300, alignSelf: 'center' }}
                        />
                        <Text style={{ ...styles.normalText, fontSize: 15, marginLeft: 5, paddingBottom: 0, marginBottom: 0 }}>
                        {"\n"}Km. 1.5 Vía a la vereda La Fuente. Tocancipá (Cundinamarca)
                        </Text>

                        <Text style={{ ...styles.normalText, fontSize: 15, marginLeft: 5, paddingBottom: 0, marginBottom: 15,width:'92%' }}>
                        Desde la Iglesia de Nuestra Señora de Fátima {"\n"}
                         en Tocancipá se transmite la misa por Youtube e Instagram:{"\n"}{"\n"}
                          Lunes a Viernes - 10:00 am {"\n"}
                          Sábado - 8:00 am, 10:00 am y 12:00 m {"\n"}
                          Domingo - 8:00 am, 10:00 am, 12:00 m Y 4:00 PM {"\n"}
                        </Text>
                    </View>

                    <View>
                        <Text style={{ ...styles.boldText, marginLeft: 15 }}>
                            Cómo llegar
                        </Text>

                        <ExternalLink link='https://goo.gl/maps/VWq5G74JH1S1sGUo7'>
                        <Image
                            source={location3}
                            style={{ width: 375, height: 180, alignSelf: 'center' }}
                        />
                        </ExternalLink>  
                        
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Text style={{ ...styles.normalText, marginLeft: 0, padding: 0 }}
                        onPress={() => Linking.openURL('https://www.facebook.com/333858749999290/')}>
                            <Icon
                            onPress={() => Linking.openURL('https://www.facebook.com/333858749999290/')}
                                name="facebook"
                                size={25} /> /loscaballerosdelavirgen
                        </Text>
                        <Text style={{ ...styles.normalText, marginLeft: 0, padding: 0 }}
                        onPress={() => Linking.openURL('https://twitter.com/Cab_Virgen')}>
                            <Icon
                                name="twitter"
                                size={25} /> @Cab_Virgen
                        </Text>
                    </View>



                </ScrollView>
                <BottomNav screen={'contact'} />
            </View>
        )
    }
}

const styles = {
    ...commonFontStyle
}