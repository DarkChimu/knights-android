import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

export default function BottomNav(props) {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: '#f3f3f3', zIndex: 9, flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingHorizontal: 40 }}>
            <View>
                <Icon name="home" size={22} iconStyle={{alignSelf: 'center'}} style={{ paddingHorizontal: 20, paddingVertical: 10, color: props.screen === 'home' ? 'red' : 'black' }} onPress={()=> navigation.navigate('Home')} />
            </View>
            <View style={{  }}>
                <Icon name="play" size={20} iconStyle={{alignSelf: 'center'}} style={{ paddingHorizontal: 20, paddingVertical: 10, color: props.screen === 'broadcast' ? 'red' : 'black' }} onPress={()=> navigation.navigate('Broadcast')} />
            </View>
            <View style={{  }}>
                <Icon name="envelope" size={22} iconStyle={{alignSelf: 'center'}} style={{ paddingHorizontal: 20, paddingVertical: 10, color: props.screen === 'contact' ? 'red' : 'black' }} onPress={()=> navigation.navigate('Contact')}/>
            </View>
        </View>
    )
}
