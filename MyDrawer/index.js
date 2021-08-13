import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../MyScreens/login'
import SplashScreen from '../MyScreens/splash'
import HomeScreen from '../MyScreens/home'
import NotificationScreen from '../MyScreens/notifications'
import Rosario from '../MyScreens/rosario'
import Evangelio from '../MyScreens/evangelio'
import Santo from '../MyScreens/santo'
import Broadcast from '../MyScreens/broadcast'
import Contact from '../MyScreens/contact'
import LoginForm from '../MyComponents/LoginForm'
import LoginFB from '../MyComponents/LoginFB'
import SignUpScreen from '../MyScreens/Signup'
import iglesiaScreen from '../MyScreens/iglesia'
import Loading from '../MyComponents/Loading'
import Delayed from '../helpers/delayed'
import Radio from '../MyScreens/radio'




// function HomeScreen(props) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{fontsize:20}}>Home Screen</Text>
//       <TouchableOpacity 
//       style={{height:50,width:200,backgroundColor:'orange'}}
//       onPress={()=>props.navigation.navigate('Login')}>
//           <Text>Ir a Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


const Tab = createBottomTabNavigator()

function MyDrawer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Splash" component={SplashScreen} options={{ tabBarVisible: false }}/>
      <Tab.Screen name="Signup" component={SignUpScreen} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Loading" component={Loading} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Login" component={LoginFB} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarVisible: false }}/> 
        <Tab.Screen name="Notifications" component={NotificationScreen} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Rosario" component={Rosario} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Evangelio" component={Evangelio} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Santo" component={Santo} options={{ tabBarVisible: false }}/> 
        <Tab.Screen name="Broadcast" component={Broadcast} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Contact" component={Contact} options={{ tabBarVisible: false }}/> 
        <Tab.Screen name="Iglesia" component={iglesiaScreen} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Radio" component={Radio} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Delayed" component={Delayed} options={{ tabBarVisible: false }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer
