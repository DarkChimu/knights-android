import React, { useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AudioPlayer from './audioplayer'

import { scale, verticalScale, moderateScale } from 'react-native-size-matters'


import commonFontStyle from '../styles/fonts/fontStyleProvider'

const dolorosos = require('../src/dolorosos-1.webp')
const dolorosos2 = require('../src/dolorosos-2.webp')
const dolorosos3 = require('../src/dolorosos-3.webp')
const dolorosos4 = require('../src/dolorosos-4.webp')
const dolorosos5 = require('../src/dolorosos-5.webp')
const dolorosos6 = require('../src/dolorosos-6.webp')
const gloriosos0 = require('../src/glorioso0.webp')
const gloriosos1 = require('../src/glorioso1.webp')
const gloriosos2 = require('../src/glorioso2.webp')
const gloriosos3 = require('../src/glorioso3.webp')
const gloriosos4 = require('../src/glorioso4.webp')
const gloriosos5 = require('../src/glorioso5.webp')
const gozosos0 = require('../src/gozoso0.webp')
const gozosos1 = require('../src/gozoso1.webp')
const gozosos2 = require('../src/gozoso2.webp')
const gozosos3 = require('../src/gozoso3.webp')
const gozosos4 = require('../src/gozoso4.webp')
const gozosos5 = require('../src/gozoso5.webp')
const luminosos0 = require('../src/luminosos0.webp')
const luminosos1 = require('../src/luminosos1.webp')
const luminosos2 = require('../src/luminosos2.webp')
const luminosos3 = require('../src/luminosos3.webp')
const luminosos4 = require('../src/luminosos4.webp')
const luminosos5 = require('../src/luminosos5.webp')

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function RosarioAccordion(props) {
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)

    switch (props.view) {
        case 'gloriosos':
            return (
                <View style={{ marginLeft: 15, marginTop: ((windowWidth * 0.15) * -1) }}>
                    <List.Section title="">
                        <List.Accordion
                            title="Ofrecimiento del Rosario"
                            left={_props => <Icon name="microphone" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <Image source={gloriosos0} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'1'} />
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: scale(350) }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que est??n el cielo, a todos los justos que est??n en la tierra, a todas las almas fieles que est??n en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jes??s, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atenci??n y devoci??n como si fuera el ultimo de mi vida. Am??n.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Se??al de la Cruz
                    </Text>
                                <Text>
                                    Por la se??al de la Santa Cruz, de nuestros enemigos, l??branos Se??or, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Esp??ritu Santo. Am??n.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Primer Misterio Glorioso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gloriosos1} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'2'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Primer Misterio Glorioso contemplamos la Resurrecci??n de Jes??s
                    </Text>
                                <Text>
                                    Nuestro Se??or triunf?? sobre la muerte y el pecado. Redimido el g??nero humano y abiertas nuevamente para nosotros las puertas del cielo, el alma sacrat??sima de Jes??s se re??ne a su adorable Cuerpo en el sepulcro, de donde sale para aparecer a su Santa Madre, a las santas mujeres y a sus ap??stoles y disc??pulos. Por este Misterio y por la intercesi??n de la Sant??sima Virgen, pidamos la gracia de tener siempre presente en nuestra memoria la escena de la Resurrecci??n y del juicio final, en el cual todos podr??n conocer la totalidad de las obras de los hombres.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Segundo Misterio Glorioso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gloriosos2} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'6'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20, marginLeft: '1%' }}>
                                    En el Segundo Misterio Glorioso contemplamos la Ascensi??n del Se??or a los cielos.
                    </Text>
                                <Text>
                                    Despu??s de prometer a los Ap??stoles la venida del Esp??ritu Santo, Nuestro Se??or se elev?? por su propio poder hasta el cielo emp??reo, donde fue recibido con pompas divinas por el Padre Eterno y toda la corte celestial. Le fue dado el asiento a la derecha del Alt??simo, de donde volver?? con toda su gloria y majestad para juzgar a los vivos y a los muertos. Por este Misterio y por la intercesi??n de la Sant??sima Virgen, pidamos la gracia de tener constantemente un ardiente deseo de ir al cielo, con nuestros cuerpos glorificados.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Tercer Misterio Glorioso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gloriosos3} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'3'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Tercer Misterio Glorioso contemplamos la venida del Esp??ritu Santo sobre Nuestra Se??ora y los Ap??stoles
                    </Text>
                                <Text>
                                    El convivio intenso de los disc??pulos con el Maestro no hab??a sido suficiente para transformarlos, ni siquiera para fortalecerlos. Con la venida del Esp??ritu Santo, la Iglesia nacida del misterio Pascual de Cristo, adquiri?? vigor y se expandi?? de manera milagrosa.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Cuarto Misterio Glorioso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gloriosos4} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'4'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Cuarto Misterio Glorioso contemplamos la Asunci??n de Mar??a a los cielos
                    </Text>
                                <Text>
                                    ??Lev??ntate, amada m??a, hermosa m??a, y vente! Porque, mira, ha pasado ya el invierno, han cesado las lluvias y se han ido. (???) Mu??strame tu semblante, d??jame o??r tu voz; porque tu voz es dulce, y bello tu semblante.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Quinto Misterio Glorioso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gloriosos5} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'5'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>

                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Quinto Misterio Glorioso contemplamos la Coronaci??n de Nuestra Se??ora como Reina universal de todo lo creado
                    </Text>
                                <Text>
                                Nuestra Se??ora es glorificada por la Sant??sima Trinidad en medio del j??bilo de toda la corte celestial. El Padre Eterno la coron??, comunic??ndole la omnipotencia de la s??plica; el Hijo, la sabidur??a; y el Esp??ritu Santo el amor. Premiada con esa triple corona, Nuestra Se??ora, Soberana y Madre compasiva, comienza a extender sobre nosotros, hijos y vasallos suyos, la inagotable abundancia de sus misericordias. Por este Misterio y la intercesi??n de la Sant??sima Virgen, pidamos la perseverancia en la gracia y la corona de gloria.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Oraciones Finales"
                            left={_props => <Icon name="microphone" />}>
                            <View style={{ marginLeft: '-10%', paddingVertical: 0 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Oraciones Finales
                    </Text>
                    <AudioPlayer track={'12'} />
                                <Text>
                                    * Rezar la Salve.
                    </Text>
                                <Text style={{ marginTop: 10 }} />
                                <Text style={{ marginTop: 5 }}>
                                    * Se puede rezar las Letan??as Lauretanas al final de todo el Rosario.
                    </Text>
                                <Text style={{ marginTop: 5 }} />
                            </View>
                        </List.Accordion>
                    </List.Section>
                </View>
            )

        case 'gozosos':
            return (
                <View style={{ marginLeft: 15, marginTop: '-15%' }}>
                    <List.Section title="">
                        <List.Accordion
                            title="Ofrecimiento del Rosario"
                            left={_props => <Icon name="microphone" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <Image source={gozosos0} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'1'} />
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: 350 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que est??n el cielo, a todos los justos que est??n en la tierra, a todas las almas fieles que est??n en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jes??s, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atenci??n y devoci??n como si fuera el ultimo de mi vida. Am??n.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Se??al de la Cruz
                    </Text>
                                <Text>
                                    Por la se??al de la Santa Cruz, de nuestros enemigos, l??branos Se??or, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Esp??ritu Santo. Am??n.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Primer Misterio Gozoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gozosos1} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'8'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Primer Misterio Gozoso contemplamos la Anunciaci??n del ??ngel y la Encarnaci??n del Verbo
                    </Text>
                                <Text>
                                    La primog??nita de todas las criaturas, la s??ntesis del orden del universo, la Madre de la Sabidur??a, no fue capaz de imaginar c??mo ser??a posible realizarse en Ella la Encarnaci??n del Verbo. ??????ninguna cosa es imposible para Dios??? le dijo el ??ngel. De un lado, la humildad perfect??sima de una Virgen, de otro, el poder absoluto de Dios. La omnipotencia se deja atraer por la humildad.   Por este Misterio, pidamos la intercesi??n de la Sant??sima Virgen para que sea infundida en nuestra alma el mismo don de humildad que Ella posee, y una entera confianza en la omnipotencia divina.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Segundo Misterio Gozoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gozosos2} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'9'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20, marginLeft: '1%' }}>
                                    En el Segundo Misterio Gozoso contemplamos la Visitaci??n de Mar??a a su prima Santa Isabel
                    </Text>
                                <Text>
                                    Inmediatamente reson?? all?? la voz de la Madre del Verbo Encarnado, toda la familia del Bautista se vio llena de gracias y bendiciones celestiales, en una primera manifestaci??n de la inagotable riqueza de beneficios y misericordias que Jes??s tra??a al mundo.   Por este Misterio, pidamos la intercesi??n de la Sant??sima Virgen para obtener la gracia de estar siempre atentos a la voz de Mar??a en nuestro interior, y de una ardiente caridad para con nuestro pr??jimo.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Tercer Misterio Gozoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gozosos3} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'10'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Tercer Misterio Gozoso contemplamos el Nacimiento del Ni??o Jes??s en Bel??n
                    </Text>
                                <Text>
                                    El cielo y la tierra celebran el nacimiento del Salvador. Y en la gruta de Bel??n, la Sant??sima Virgen tom?? reverentemente al Ni??o Jes??s y lo estrech?? a su pecho. Imaginemos los sentimientos de devoci??n, de ternura y de amor que experiment?? Mar??a al ver en sus brazos al Se??or del mundo, el Hijo del Eterno Padre que se hab??a dignado hacerse tambi??n Hijo de Ella, eligi??ndola por Madre entre todas las mujeres.   Por este Misterio y por la intercesi??n de la Sant??sima Virgen pidamos la gracia de conservar siempre todas ???las palabras??? que nos sean dichas por el Esp??ritu Santo en nuestro interior, y meditarlas en nuestros corazones.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Cuarto Misterio Gozoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gozosos4} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'11'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Cuarto Misterio Gozoso contemplamos la Presentaci??n del Ni??o Jes??s en el templo y la Purificaci??n de Mar??a
                    </Text>
                              <Text>
                                    Delante del Sumo Bien, no puede haber una posici??n de neutralidad: o la adhesi??n, o el rechazo. Si seguimos los caminos del Evangelio, se dar?? con nosotros lo mismo que le sucedi?? a Jes??s. Por este Misterio y la intercesi??n de la Sant??sima Virgen, pidamos la gracia de cumplir la Ley con perfecci??n, aceptando con amor y resignaci??n las contradicciones que podamos causar en los otros, por nuestros dones o virtudes.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Quinto Misterio Gozoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={gozosos5} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'12'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Tan pronto se dieron cuenta de su desaparici??n, Mar??a y Jos?? se pusieron inmediatamente a buscar a Jes??s. Ejemplo excelso para nosotros: si por culpa o no lleg??semos a perder a Jes??s, busqu??moslo con toda prontitud. Por este misterio y la intercesi??n de la Sant??sima Virgen, pidamos la gracia de jam??s perder a Jes??s; pero si esto se diere, pidamos la gracia de buscarlo con la misma diligencia que Ella y San Jos?? tuvieron.
                    </Text>
                                <Text>
                                    ???Llegados al lugar llamado Calvario, le crucificaron. (???) Jes??s dec??a: Padre, perd??nales, porque no saben lo que hacen (???). Era ya cerca de la hora sexta cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la hora nona (???). Jes??s, dando un fuerte grito, dijo: Padre, en tus manos encomiendo mi esp??ritu y, dicho esto, expir??.??? ???Como le vieron muerto, no le quebraron las piernas, sino que uno de los soldados le traspas?? el costado con una lanza y al instante sali?? sangre y agua.???
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Oraciones Finales"
                            left={_props => <Icon name="microphone" />}>
                            <View style={{ marginLeft: '-10%', paddingVertical: 0 }}>
                                
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Oraciones Finales
                    </Text>
                    <AudioPlayer track={'12'} />
                                <Text>
                                    * Rezar la Salve.
                    </Text>
                                <Text style={{ marginTop: 10 }} />
                                <Text style={{ marginTop: 5 }}>
                                    * Se puede rezar las Letan??as Lauretanas al final de todo el Rosario.
                    </Text>
                                <Text style={{ marginTop: 5 }} />
                                <View style={{padding:20}}></View>
                            </View>
                        </List.Accordion>
                    </List.Section>
                </View>
            )

        case 'dolorosos':
            return (
                <View style={{ marginLeft: 15, marginTop: ((windowWidth * 0.15) * -1) }}>
                    <List.Section title="">
                        <List.Accordion
                            title="Ofrecimiento del Rosario"
                            left={_props => <Icon name="microphone" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <Image source={dolorosos} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'1'} />
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: scale(350) }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que est??n el cielo, a todos los justos que est??n en la tierra, a todas las almas fieles que est??n en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jes??s, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atenci??n y devoci??n como si fuera el ultimo de mi vida. Am??n.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Se??al de la Cruz
                    </Text>
                                <Text>
                                    Por la se??al de la Santa Cruz, de nuestros enemigos, l??branos Se??or, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Esp??ritu Santo. Am??n.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Primer Misterio Doloroso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={dolorosos2} style={{ ...styles.misterios }} />??
                            <AudioPlayer track={'19'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el primer Misterio Doloroso contemplamos la Agon??a de Jes??s en el Huerto de los Olivos
                    </Text>
                                <Text>
                                    Las oraciones de Jes??s al Padre constituyen una de las m??s bellas escenas del Evangelio. ??D??nde encontrar en toda la obra de la creaci??n, un relacionamiento con Dios tan rico cuanto aqu??l? Jes??s es para nosotros el divino ejemplo y consejero. Aprendamos de ??l a rezar para no caer en tentaci??n. Por este Misterio pidamos la intercesi??n de la Sant??sima Virgen para obtener la gracia de beneficiarnos plenamente de las oraciones de Jes??s, en especial de ??sta, hecha en el Huerto de los Olivos, y as?? seamos contemplativos con ??l.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Segundo Misterio Doloroso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={dolorosos3} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'20'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20, marginLeft: '1%' }}>
                                    En el segundo misterio doloroso contemplamos la sangrienta flagelaci??n de jes??s
                    </Text>
                                <Text>
                                    En este misterio Pilatos manda a flagelar a Jes??s por temor a las autoridades jud??as. Esta es la actitud frecuente de todos los que buscan una posici??n neutra entre el bien y el mal: en situaciones cr??ticas prefieren de cierta manera sacrificar algo del bien, en busca de un ablandamiento del mal. Como Pilatos no encontr?? crimen alguno en Jes??s, lo mand?? flagelar. Por este Misterio, pidamos la intercesi??n de la Sant??sima Virgen para obtener la gracia de siempre atender con entusiasmo y perfecci??n a los llamados de Dios, a fin de no seguir jam??s el ejemplo de Pilatos, mandando flagelar a Jes??s.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Tercer Misterio Doloroso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={dolorosos4} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'21'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el tercer misterio doloroso contemplamos la coronaci??n de espinas de jes??s
                    </Text>
                                <Text>
                                    Por este Misterio, pidamos la intercesi??n de la Sant??sima Virgen para obtener la gracia de soportar con humildad y resignaci??n las injurias y ofensas, aunque sean injustas, manteniendo siempre como Jes??s un alto sentido de nuestra dignidad
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Cuarto Misterio Doloroso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={dolorosos5} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'22'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Cuarto Misterio Doloroso contemplamos a Jes??s con la Cruz a Cuestas Camino del Calvario
                    </Text>
                                <Text>
                                    Inmediatamente despu??s de haber sido condenado por Pilatos, Nuestro Se??or Jesucristo tom?? la cruz sobre los hombros para llevarla al Calvario y en ella morir crucificado. La carg?? sin manifestar repugnancia alguna; antes por el contrario, la abraz?? con amor indecible, pues deseaba levantar bien alto el estandarte bajo el cual deber??an alistarse sus seguidores en esta tierra. Bajo su peso, Jes??s alcanzaba nuestra salvaci??n; y con su ejemplo, nos daba fuerza para que abraz??semos nuestra propia cruz, y de esta manera venci??semos las pruebas de esta vida. Es a trav??s de la cruz que con ??l compartiremos despu??s el Reino de los cielos.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Quinto Misterio Doloroso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={dolorosos6} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'23'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Quinto Misterio Doloroso contemplamos la Crucifici??n y Muerte de Jes??s
                    </Text>
                                <Text>
                                    ???Llegados al lugar llamado Calvario, le crucificaron. (???) Jes??s dec??a: Padre, perd??nales, porque no saben lo que hacen (???). Era ya cerca de la hora sexta cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la hora nona (???). Jes??s, dando un fuerte grito, dijo: Padre, en tus manos encomiendo mi esp??ritu y, dicho esto, expir??.??? ???Como le vieron muerto, no le quebraron las piernas, sino que uno de los soldados le traspas?? el costado con una lanza y al instante sali?? sangre y agua.???
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Oraciones Finales"
                            left={_props => <Icon name="microphone" />}>
                            <View style={{ marginLeft: '-10%', paddingVertical: 0 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Oraciones Finales
                    </Text>
                    <AudioPlayer track={'12'} />
                                <Text>
                                    * Rezar la Salve.
                    </Text>
                                <Text style={{ marginTop: 10 }} />
                                <Text style={{ marginTop: 5 }}>
                                    * Se puede rezar las Letan??as Lauretanas al final de todo el Rosario.
                    </Text>
                                <Text style={{ marginTop: 5 }} />
                            </View>
                        </List.Accordion>
                    </List.Section>
                </View>
            )

        case 'luminosos':
            return (
                <View style={{ marginLeft: 15, marginTop: '-15%' }}>
                    <List.Section title="">
                        <List.Accordion
                            title="Ofrecimiento del Rosario"
                            left={_props => <Icon name="microphone" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <Image source={luminosos0} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'1'} />
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: scale(350) }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que est??n el cielo, a todos los justos que est??n en la tierra, a todas las almas fieles que est??n en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jes??s, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atenci??n y devoci??n como si fuera el ultimo de mi vida. Am??n.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Se??al de la Cruz
                    </Text>
                                <Text>
                                    Por la se??al de la Santa Cruz, de nuestros enemigos, l??branos Se??or, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Esp??ritu Santo. Am??n.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Primer Misterio Luminoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={luminosos1} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'14'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    EN EL PRIMER MISTERIO LUMINOSO CONTEMPLAMOS EL BAUTISMO DE JES??S EN EL R??O JORD??N (2 CO 5, 21; . MT 3, 17.)
                    </Text>
                                <Text>
                                    Antes de iniciar su vida p??blica, Jes??s, la Inocencia Encarnada, se hizo bautizar asumiendo sobre s?? nuestras debilidades, maldades y miserias. De esta forma deben comenzar todas las obras de santidad: por una purificaci??n. Por este misterio y la intercesi??n de la Sant??sima Virgen, pidamos la gracia de que por el Bautismo de su Divino Hijo, nos obtenga un coraz??n limpio y un esp??ritu nuevo, para realizar con perfecci??n nuestro apostolado junto al pr??jimo.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Segundo Misterio Luminoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={luminosos2} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'15'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20, marginLeft: '1%' }}>
                                    EN EL SEGUNDO MISTERIO LUMINOSO CONTEMPLAMOS LA REALIZACI??N DEL PRIMER MILAGRO DE JES??S, TRANSFORMANDO EL AGUA EN VINO EN LAS BODAS DE CAN?? (JN 2, 1-12. )
                    </Text>
                                <Text>
                                    En realidad, la hora no hab??a llegado a??n. Sin embargo, una simple insinuaci??n de la Madre, lleva a Jes??s a anticipar sus portentosos milagros. Permiti?? la Providencia que sucediese de esa forma, para ense??arnos el maravilloso poder de intercesi??n de Mar??a Sant??sima junto a su Divino Hijo. Por este misterio y la intercesi??n de la Sant??sima Virgen, pidamos la gracia de tener una confianza inquebrantable, pura y creciente en la omnipotencia de su s??plica.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Tercer Misterio Luminoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={luminosos3} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'16'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    EN EL TERCER MISTERIO LUMINOSO CONTEMPLAMOS LA PREDICACI??N DE JES??S, ANUNCIANDO EL REINO DE DIOS E INVITANDO A LA CONVERSI??N (MC 1, 15; MC 2. 3-13; LC 47-48. )
                    </Text>
                                <Text>
                                    Despu??s de ser Juan encarcelado, Jes??s fue a Galilea a predicar el evangelio de Dios; y dec??a: ??Se ha cumplido el tiempo y el reino de Dios est?? cerca. Arrepent??os y creed en el evangelio??.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Cuarto Misterio Luminoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={luminosos4} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'17'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    EN EL CUARTO MISTERIO LUMINOSO CONTEMPLAMOS LA TRANSFIGURACI??N DE JES??S EN EL MONTE TABOR (LC 9, 35.)
                    </Text>
                                <Text>
                                    Al transfigurarse delante de los tres Ap??stoles, Jes??s fortaleci?? nuestra esperanza sobre la vida eterna, anim??ndonos asoportar bien los sufrimientos y pruebas de esta vida. Cuando nosotros sabemos la gloria que nos aguarda, tenemos m??s paciencia en medio de las tribulaciones. ??Con este fulgor ser?? nuestra resurrecci??n en el d??a del juicio! Por este misterio, pidamos la intercesi??n de la Sant??sima Virgen para obtener la gracia de nunca perder la convicci??n de la gloria que est?? reservada a los que perseveren, a fin de que jam??s nos desanimemos a lo largo de nuestra existencia.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Quinto Misterio Luminoso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={luminosos5} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'18'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el Quinto Misterio Luminoso contemplamos la Instituci??n de la Eucarist??a en la ??ltima Cena (Jn13, 1. )
                    </Text>
                                <Text>
                                    ??Qu?? m??s podr??a habernos dado Jes??s? Se hizo comida y bebida para que eternamente podamos participar de su propia vida. Descendi?? desde lo m??s alto de los cielos, asumiendo la sustancia del pan y del vino para elevarnos al convivio de Dios. Al comulgar, nosotros nos asemejamos a Mar??a por algunos momentos, poseyendo el Cuerpo, Sangre, Alma y Divinidad de Jes??s en nuestras entra??as.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditaci??n)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Mar??as,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Esp??ritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Am??n.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jes??s m??o, perdona nuestras culpas, l??branos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las m??s necesitadas de tu Misericordia.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Oraciones Finales"
                            left={_props => <Icon name="microphone" />}>
                            <View style={{ marginLeft: '-10%', paddingVertical: 0 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Oraciones Finales
                    </Text>
                    <AudioPlayer track={'12'} />
                                <Text>
                                    * Rezar la Salve.
                    </Text>
                                <Text style={{ marginTop: 10 }} />
                                <Text style={{ marginTop: 5 }}>
                                    * Se puede rezar las Letan??as Lauretanas al final de todo el Rosario.
                    </Text>
                                <Text style={{ marginTop: 5 }} />
                            </View>
                        </List.Accordion>
                    </List.Section>
                </View>
            )
        default:
            return (
                <Text> Cargando...</Text>
            )
    }
}

const styles = {
    ...commonFontStyle,
    misterios: {
        width: scale(291),
        height: verticalScale(200),
        marginLeft: '10%'
    }
}
