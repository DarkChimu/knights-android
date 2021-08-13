import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Articles from './Articles'
import LoginForm from './LoginForm'
import Loading from './Loading'
import HomeScreen from '../MyScreens/home'
import auth from '@react-native-firebase/auth'
class LoginFB extends Component {

    state = {
        loggedIn: null
    }

    logIn = auth().onAuthStateChanged(user =>  user ? 
        this.setState({ LoggedIn: true })  : this.setState({ loggedIn: false }))

    logOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'))
    }
    // Initialize Firebase

    renderContent = () => {
        return this.state.loggedIn === true ? 
        <HomeScreen /> : <LoginForm />
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        )
    }
}

export default LoginFB

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

})