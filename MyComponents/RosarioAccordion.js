import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AudioPlayer from './audioplayer'


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

export default function RosarioAccordion(props) {
    const [expanded, setExpanded] = useState(true)
    const handlePress = () => setExpanded(!expanded)

    switch (props.view) {
        case 'gloriosos':
            return (
                <View style={{ marginLeft: 15, marginTop: '-15%' }}>
                    <List.Section title="">
                        <List.Accordion
                            title="Ofrecimiento del Rosario"
                            left={_props => <Icon name="microphone" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <Image source={gloriosos0} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'1'} />
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: 350 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que están el cielo, a todos los justos que están en la tierra, a todas las almas fieles que están en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jesús, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atención y devoción como si fuera el ultimo de mi vida. Amén.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Señal de la Cruz
                    </Text>
                                <Text>
                                    Por la señal de la Santa Cruz, de nuestros enemigos, líbranos Señor, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.
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
                                    En el Primer Misterio Glorioso contemplamos la Resurrección de Jesús
                    </Text>
                                <Text>
                                    Nuestro Señor triunfó sobre la muerte y el pecado. Redimido el género humano y abiertas nuevamente para nosotros las puertas del cielo, el alma sacratísima de Jesús se reúne a su adorable Cuerpo en el sepulcro, de donde sale para aparecer a su Santa Madre, a las santas mujeres y a sus apóstoles y discípulos. Por este Misterio y por la intercesión de la Santísima Virgen, pidamos la gracia de tener siempre presente en nuestra memoria la escena de la Resurrección y del juicio final, en el cual todos podrán conocer la totalidad de las obras de los hombres.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Segundo Misterio Glorioso contemplamos la Ascensión del Señor a los cielos.
                    </Text>
                                <Text>
                                    Después de prometer a los Apóstoles la venida del Espíritu Santo, Nuestro Señor se elevó por su propio poder hasta el cielo empíreo, donde fue recibido con pompas divinas por el Padre Eterno y toda la corte celestial. Le fue dado el asiento a la derecha del Altísimo, de donde volverá con toda su gloria y majestad para juzgar a los vivos y a los muertos. Por este Misterio y por la intercesión de la Santísima Virgen, pidamos la gracia de tener constantemente un ardiente deseo de ir al cielo, con nuestros cuerpos glorificados.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Tercer Misterio Glorioso contemplamos la venida del Espíritu Santo sobre Nuestra Señora y los Apóstoles
                    </Text>
                                <Text>
                                    El convivio intenso de los discípulos con el Maestro no había sido suficiente para transformarlos, ni siquiera para fortalecerlos. Con la venida del Espíritu Santo, la Iglesia nacida del misterio Pascual de Cristo, adquirió vigor y se expandió de manera milagrosa.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Cuarto Misterio Glorioso contemplamos la Asunción de María a los cielos
                    </Text>
                                <Text>
                                    ¡Levántate, amada mía, hermosa mía, y vente! Porque, mira, ha pasado ya el invierno, han cesado las lluvias y se han ido. (…) Muéstrame tu semblante, déjame oír tu voz; porque tu voz es dulce, y bello tu semblante.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Quinto Misterio Glorioso contemplamos la Coronación de Nuestra Señora como Reina universal de todo lo creado
                    </Text>
                                <Text>
                                Nuestra Señora es glorificada por la Santísima Trinidad en medio del júbilo de toda la corte celestial. El Padre Eterno la coronó, comunicándole la omnipotencia de la súplica; el Hijo, la sabiduría; y el Espíritu Santo el amor. Premiada con esa triple corona, Nuestra Señora, Soberana y Madre compasiva, comienza a extender sobre nosotros, hijos y vasallos suyos, la inagotable abundancia de sus misericordias. Por este Misterio y la intercesión de la Santísima Virgen, pidamos la perseverancia en la gracia y la corona de gloria.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    * Se puede rezar las Letanías Lauretanas al final de todo el Rosario.
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
                                    Me uno a todos los santos que están el cielo, a todos los justos que están en la tierra, a todas las almas fieles que están en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jesús, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atención y devoción como si fuera el ultimo de mi vida. Amén.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Señal de la Cruz
                    </Text>
                                <Text>
                                    Por la señal de la Santa Cruz, de nuestros enemigos, líbranos Señor, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.
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
                                    En el Primer Misterio Gozoso contemplamos la Anunciación del ángel y la Encarnación del Verbo
                    </Text>
                                <Text>
                                    La primogénita de todas las criaturas, la síntesis del orden del universo, la Madre de la Sabiduría, no fue capaz de imaginar cómo sería posible realizarse en Ella la Encarnación del Verbo. “…ninguna cosa es imposible para Dios” le dijo el ángel. De un lado, la humildad perfectísima de una Virgen, de otro, el poder absoluto de Dios. La omnipotencia se deja atraer por la humildad.   Por este Misterio, pidamos la intercesión de la Santísima Virgen para que sea infundida en nuestra alma el mismo don de humildad que Ella posee, y una entera confianza en la omnipotencia divina.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Segundo Misterio Gozoso contemplamos la Visitación de María a su prima Santa Isabel
                    </Text>
                                <Text>
                                    Inmediatamente resonó allí la voz de la Madre del Verbo Encarnado, toda la familia del Bautista se vio llena de gracias y bendiciones celestiales, en una primera manifestación de la inagotable riqueza de beneficios y misericordias que Jesús traía al mundo.   Por este Misterio, pidamos la intercesión de la Santísima Virgen para obtener la gracia de estar siempre atentos a la voz de María en nuestro interior, y de una ardiente caridad para con nuestro prójimo.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Tercer Misterio Gozoso contemplamos el Nacimiento del Niño Jesús en Belén
                    </Text>
                                <Text>
                                    El cielo y la tierra celebran el nacimiento del Salvador. Y en la gruta de Belén, la Santísima Virgen tomó reverentemente al Niño Jesús y lo estrechó a su pecho. Imaginemos los sentimientos de devoción, de ternura y de amor que experimentó María al ver en sus brazos al Señor del mundo, el Hijo del Eterno Padre que se había dignado hacerse también Hijo de Ella, eligiéndola por Madre entre todas las mujeres.   Por este Misterio y por la intercesión de la Santísima Virgen pidamos la gracia de conservar siempre todas “las palabras” que nos sean dichas por el Espíritu Santo en nuestro interior, y meditarlas en nuestros corazones.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Cuarto Misterio Gozoso contemplamos la Presentación del Niño Jesús en el templo y la Purificación de María
                    </Text>
                              <Text>
                                    Delante del Sumo Bien, no puede haber una posición de neutralidad: o la adhesión, o el rechazo. Si seguimos los caminos del Evangelio, se dará con nosotros lo mismo que le sucedió a Jesús. Por este Misterio y la intercesión de la Santísima Virgen, pidamos la gracia de cumplir la Ley con perfección, aceptando con amor y resignación las contradicciones que podamos causar en los otros, por nuestros dones o virtudes.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    Tan pronto se dieron cuenta de su desaparición, María y José se pusieron inmediatamente a buscar a Jesús. Ejemplo excelso para nosotros: si por culpa o no llegásemos a perder a Jesús, busquémoslo con toda prontitud. Por este misterio y la intercesión de la Santísima Virgen, pidamos la gracia de jamás perder a Jesús; pero si esto se diere, pidamos la gracia de buscarlo con la misma diligencia que Ella y San José tuvieron.
                    </Text>
                                <Text>
                                    “Llegados al lugar llamado Calvario, le crucificaron. (…) Jesús decía: Padre, perdónales, porque no saben lo que hacen (…). Era ya cerca de la hora sexta cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la hora nona (…). Jesús, dando un fuerte grito, dijo: Padre, en tus manos encomiendo mi espíritu y, dicho esto, expiró.” “Como le vieron muerto, no le quebraron las piernas, sino que uno de los soldados le traspasó el costado con una lanza y al instante salió sangre y agua.”
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    * Se puede rezar las Letanías Lauretanas al final de todo el Rosario.
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
                <View style={{ marginLeft: 15, marginTop: '-15%' }}>
                    <List.Section title="">
                        <List.Accordion
                            title="Ofrecimiento del Rosario"
                            left={_props => <Icon name="microphone" />}
                            expanded={expanded}
                            onPress={handlePress}>
                            <Image source={dolorosos} style={{ ...styles.misterios }} />
                            <AudioPlayer track={'1'} />
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: 350 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que están el cielo, a todos los justos que están en la tierra, a todas las almas fieles que están en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jesús, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atención y devoción como si fuera el ultimo de mi vida. Amén.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Señal de la Cruz
                    </Text>
                                <Text>
                                    Por la señal de la Santa Cruz, de nuestros enemigos, líbranos Señor, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.
                    </Text>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Primer Misterio Doloroso"
                            left={_props => <Icon name="microphone" />}>
                            <Image source={dolorosos2} style={{ ...styles.misterios }} />ç
                            <AudioPlayer track={'19'} />
                            <View style={{ marginLeft: '-2%', paddingVertical: 0, width: '80%' }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    En el primer Misterio Doloroso contemplamos la Agonía de Jesús en el Huerto de los Olivos
                    </Text>
                                <Text>
                                    Las oraciones de Jesús al Padre constituyen una de las más bellas escenas del Evangelio. ¿Dónde encontrar en toda la obra de la creación, un relacionamiento con Dios tan rico cuanto aquél? Jesús es para nosotros el divino ejemplo y consejero. Aprendamos de Él a rezar para no caer en tentación. Por este Misterio pidamos la intercesión de la Santísima Virgen para obtener la gracia de beneficiarnos plenamente de las oraciones de Jesús, en especial de ésta, hecha en el Huerto de los Olivos, y así seamos contemplativos con Él.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el segundo misterio doloroso contemplamos la sangrienta flagelación de jesús
                    </Text>
                                <Text>
                                    En este misterio Pilatos manda a flagelar a Jesús por temor a las autoridades judías. Esta es la actitud frecuente de todos los que buscan una posición neutra entre el bien y el mal: en situaciones críticas prefieren de cierta manera sacrificar algo del bien, en busca de un ablandamiento del mal. Como Pilatos no encontró crimen alguno en Jesús, lo mandó flagelar. Por este Misterio, pidamos la intercesión de la Santísima Virgen para obtener la gracia de siempre atender con entusiasmo y perfección a los llamados de Dios, a fin de no seguir jamás el ejemplo de Pilatos, mandando flagelar a Jesús.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el tercer misterio doloroso contemplamos la coronación de espinas de jesús
                    </Text>
                                <Text>
                                    Por este Misterio, pidamos la intercesión de la Santísima Virgen para obtener la gracia de soportar con humildad y resignación las injurias y ofensas, aunque sean injustas, manteniendo siempre como Jesús un alto sentido de nuestra dignidad
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Cuarto Misterio Doloroso contemplamos a Jesús con la Cruz a Cuestas Camino del Calvario
                    </Text>
                                <Text>
                                    Inmediatamente después de haber sido condenado por Pilatos, Nuestro Señor Jesucristo tomó la cruz sobre los hombros para llevarla al Calvario y en ella morir crucificado. La cargó sin manifestar repugnancia alguna; antes por el contrario, la abrazó con amor indecible, pues deseaba levantar bien alto el estandarte bajo el cual deberían alistarse sus seguidores en esta tierra. Bajo su peso, Jesús alcanzaba nuestra salvación; y con su ejemplo, nos daba fuerza para que abrazásemos nuestra propia cruz, y de esta manera venciésemos las pruebas de esta vida. Es a través de la cruz que con Él compartiremos después el Reino de los cielos.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Quinto Misterio Doloroso contemplamos la Crucifición y Muerte de Jesús
                    </Text>
                                <Text>
                                    “Llegados al lugar llamado Calvario, le crucificaron. (…) Jesús decía: Padre, perdónales, porque no saben lo que hacen (…). Era ya cerca de la hora sexta cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la hora nona (…). Jesús, dando un fuerte grito, dijo: Padre, en tus manos encomiendo mi espíritu y, dicho esto, expiró.” “Como le vieron muerto, no le quebraron las piernas, sino que uno de los soldados le traspasó el costado con una lanza y al instante salió sangre y agua.”
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    * Se puede rezar las Letanías Lauretanas al final de todo el Rosario.
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
                            <View style={{ marginLeft: '-1%', paddingVertical: 0, width: 350 }}>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Ofrecimiento del Rosario
                    </Text>
                                <Text>
                                    Me uno a todos los santos que están el cielo, a todos los justos que están en la tierra, a todas las almas fieles que están en este lugar.{"\n"}
                                </Text>
                                <Text>
                                    Me uno a Vos oh Jesús, para alabar dignamente a vuestra Santa Madre y alabaros a Vos en Ella y por Ella.{"\n"}
                                </Text>
                                <Text>
                                    Renuncio a todas las distracciones que me vinieren durante este rosario, que quiero recitar con modestia, atención y devoción como si fuera el ultimo de mi vida. Amén.
                    </Text>
                                <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 20 }}>
                                    Señal de la Cruz
                    </Text>
                                <Text>
                                    Por la señal de la Santa Cruz, de nuestros enemigos, líbranos Señor, Dios nuestro.
                    </Text>
                                <Text>
                                    En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.
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
                                    EN EL PRIMER MISTERIO LUMINOSO CONTEMPLAMOS EL BAUTISMO DE JESÚS EN EL RÍO JORDÁN (2 CO 5, 21; . MT 3, 17.)
                    </Text>
                                <Text>
                                    Antes de iniciar su vida pública, Jesús, la Inocencia Encarnada, se hizo bautizar asumiendo sobre sí nuestras debilidades, maldades y miserias. De esta forma deben comenzar todas las obras de santidad: por una purificación. Por este misterio y la intercesión de la Santísima Virgen, pidamos la gracia de que por el Bautismo de su Divino Hijo, nos obtenga un corazón limpio y un espíritu nuevo, para realizar con perfección nuestro apostolado junto al prójimo.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    EN EL SEGUNDO MISTERIO LUMINOSO CONTEMPLAMOS LA REALIZACIÓN DEL PRIMER MILAGRO DE JESÚS, TRANSFORMANDO EL AGUA EN VINO EN LAS BODAS DE CANÁ (JN 2, 1-12. )
                    </Text>
                                <Text>
                                    En realidad, la hora no había llegado aún. Sin embargo, una simple insinuación de la Madre, lleva a Jesús a anticipar sus portentosos milagros. Permitió la Providencia que sucediese de esa forma, para enseñarnos el maravilloso poder de intercesión de María Santísima junto a su Divino Hijo. Por este misterio y la intercesión de la Santísima Virgen, pidamos la gracia de tener una confianza inquebrantable, pura y creciente en la omnipotencia de su súplica.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    EN EL TERCER MISTERIO LUMINOSO CONTEMPLAMOS LA PREDICACIÓN DE JESÚS, ANUNCIANDO EL REINO DE DIOS E INVITANDO A LA CONVERSIÓN (MC 1, 15; MC 2. 3-13; LC 47-48. )
                    </Text>
                                <Text>
                                    Después de ser Juan encarcelado, Jesús fue a Galilea a predicar el evangelio de Dios; y decía: «Se ha cumplido el tiempo y el reino de Dios está cerca. Arrepentíos y creed en el evangelio».
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    EN EL CUARTO MISTERIO LUMINOSO CONTEMPLAMOS LA TRANSFIGURACIÓN DE JESÚS EN EL MONTE TABOR (LC 9, 35.)
                    </Text>
                                <Text>
                                    Al transfigurarse delante de los tres Apóstoles, Jesús fortaleció nuestra esperanza sobre la vida eterna, animándonos asoportar bien los sufrimientos y pruebas de esta vida. Cuando nosotros sabemos la gloria que nos aguarda, tenemos más paciencia en medio de las tribulaciones. ¡Con este fulgor será nuestra resurrección en el día del juicio! Por este misterio, pidamos la intercesión de la Santísima Virgen para obtener la gracia de nunca perder la convicción de la gloria que está reservada a los que perseveren, a fin de que jamás nos desanimemos a lo largo de nuestra existencia.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    En el Quinto Misterio Luminoso contemplamos la Institución de la Eucaristía en la Última Cena (Jn13, 1. )
                    </Text>
                                <Text>
                                    ¿Qué más podría habernos dado Jesús? Se hizo comida y bebida para que eternamente podamos participar de su propia vida. Descendió desde lo más alto de los cielos, asumiendo la sustancia del pan y del vino para elevarnos al convivio de Dios. Al comulgar, nosotros nos asemejamos a María por algunos momentos, poseyendo el Cuerpo, Sangre, Alma y Divinidad de Jesús en nuestras entrañas.
                    </Text>
                                <Text style={{ marginTop: 10 }}>
                                    * (Pausa para meditación)
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Padre Nuestro,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * 10 Ave Marías,
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén.
                    </Text>
                                <Text style={{ marginTop: 5 }}>
                                    * Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al Cielo a todas las almas, y socorre especialmente a las más necesitadas de tu Misericordia.
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
                                    * Se puede rezar las Letanías Lauretanas al final de todo el Rosario.
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
        width: 291,
        height: 200,
        marginLeft: '10%'
    }
}