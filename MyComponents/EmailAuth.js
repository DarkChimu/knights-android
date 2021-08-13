import React, { Component } from 'react'
import auth from '@react-native-firebase/auth'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Button, Keyboard} from 'react-native'
import HomeScreen from '../MyScreens/home'
import GoHome from './goHome'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// create a component
class EmailAuth extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        loggedIn: false
    }

    onBottomPress = () => {
        auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess)
            .catch(err => {
                this.setState({
                    error: err.message
                })
                Alert.alert(err.message)
            })


    }
    onLoginSuccess = async () => {
        this.setState({
            error: '',
            loading: false,
            loggedIn: true
        })
        AsyncStorage.setItem('LogIn', JSON.stringify({
            email: this.state.email,
            logged: this.state.loggedIn
        }))
    }


    render() {
        if (this.state.loggedIn === true) {
            return (
                    <GoHome />
            )
        }
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                <TextInput
                    placeholder="email"
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    placeholder="password"
                    style={styles.input}
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />



                <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
                <Text style={styles.errorText} >
                    {this.state.error}
                </Text>

                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 15

    },
    errorText: {
        fontSize: 25,
        color: 'red',
        alignSelf: 'center',
        marginTop: 10

    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonContainer: {
        backgroundColor: '#1877F2',
        padding: 15,
        borderRadius: 8
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around'
      }
})

//make this component available to the app
export default EmailAuth
