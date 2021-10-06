import React, { Component } from 'react'

import {
    Text,
    View,
    Image,
    ScrollView,
  } from 'react-native'

  import commonFontStyle from '../styles/fonts/fontStyleProvider'
  import Icon from 'react-native-vector-icons/FontAwesome5'
  import BottomNav from '../MyComponents/bottomNav'
  import { Linking } from 'react-native'
  
  var notFour = require('../src/notfour.png')
  const broadOne = require('../src/broad-1.png')
  const broadTwo = require('../src/broad-2.png')
  const broadTree = require('../src/broad-3.png')
  const broadFour = require('../src/broad-4.png')
  const broadFive = require('../src/radio_caballeros.png')

  export default class Broadcast extends Component {
      render() {
          return (
              <View style={{ flex: 1 }}>
                  <ScrollView>
                      <View style={{ paddingTop: 24 }}>
                          <Text style={styles.boldText}>Transmisiones en Vivo</Text>
                      </View>
                      <View>
                          <Text style={{...styles.titleText, marginLeft: 10}}>
                              Lunes a Viernes
                          </Text>
                      </View>
                      <ScrollView horizontal={true}>
                      <View style={{ ...styles.cardContainer, marginLeft: 20 }}>
                              <Image
                                  source={broadFive}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Radio Caballeros</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="play" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="circle" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer }}>
                              <Image
                                  source={broadTwo}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 7:30am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 7:00pm</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>


                          
                      </ScrollView>
                      <View>
                          <Text style={{ ...styles.titleText, marginTop: 25, marginLeft: 10}}>
                              Sábado
                          </Text>
                      </View>
                      <ScrollView horizontal={true}>
                      <View style={{ ...styles.cardContainer, marginLeft: 20 }}>
                              <Image
                                  source={broadFive}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Radio Caballeros</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="play" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="circle" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer }}>
                              <Image
                                  source={broadTwo}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 8:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadTree}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 7:00pm</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          
                      </ScrollView>
                      
                      <View>
                          <Text style={{ ...styles.titleText, marginTop: 25, marginLeft: 10 }}>
                              Domingo
                          </Text>
                      </View>
                      <ScrollView horizontal={true}>
                      <View style={{ ...styles.cardContainer, marginLeft: 20 }}>
                              <Image
                                  source={broadFive}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Radio Caballeros</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="play" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="circle" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 8:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={broadTree}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 10:00am</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={notFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 12:00 m</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                          <View style={{ ...styles.cardContainer, marginLeft: 0 }}>
                              <Image
                                  source={notFour}
                                  style={styles.broadImage}
                              />
                              <Text style={styles.cardText}> Misa de 7:00pm</Text>
                              <View style={{ flexDirection: "row" }}>
                                  <View style={{ padding: 0, bottom: 10 }}>
                                  <Icon name="instagram" size={25} color="#900"
                                      onPress={() => Linking.openURL('https://www.instagram.com/caballeros_de_la_virgen/')}/>
                                  </View>
                                  <View style={{ marginLeft: 20, padding: 0, bottom: 10 }}>
                                  <Icon name="youtube" size={25} color="#900" 
                                    onPress={() => Linking.openURL('https://www.youtube.com/channel/UCIkQQaQaiFagKTwNs4SgQOg')} />
                                  </View>
                              </View>
                          </View>
                      </ScrollView>
                      <View style={{ paddingBottom: 50}}/>
                  </ScrollView>
                  <BottomNav screen={'broadcast'} />
              </View>
          )
      }
  }

const styles = {
    ...commonFontStyle,
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 20,
        marginEnd: 20,
        marginTop: 30,
        borderColor:"#E0E0E0",
        borderWidth:1,
        borderRadius: 20,
        width: 122,
        height: 124
    },
    cardText: {
        
        top: "-20%",
        left: '-1%'
    },
    broadImage: {
        height: 62, 
        width: 122, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        top: "-25%"
    }
}