import React, { Component } from 'react'
import auth from '@react-native-firebase/auth'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

// create a component
class EmailAuthSign extends Component {
    state = {
        name:'',
        phone:'',
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onBottomPress = () => {
        auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert('Tu usuario a sido registrado exitosamente')
                console.log('User account created & signed in!');
             })
             .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }
            
                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }            
                console.error(error); 
            })


    }
    onLoginSuccess = () => {
        this.setState({
            error: '',
            loading: false
        })
    }


    render() {
        return (
            

            <View style={styles.container}>
                
                <TextInput
                    placeholder="nombre"
                    style={styles.input}
                    secureTextEntry
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />

                {/* <TextInput
                    placeholder="telefono"
                    style={styles.input}
                    secureTextEntry
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })}
                /> */}
                
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
                    <Text style={styles.buttonText}>Registrarse ! </Text>
                </TouchableOpacity>

                <Text style={styles.errorText} >
                    {this.state.error}
                </Text>

                <Text style={{ ...styles.normalText, marginTop: 0, paddingTop: 0}}> ¿Ya tienes una cuenta? Click aquí </Text>
            </View>
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
        backgroundColor: '#3B3B98',
        padding: 15,
        borderRadius: 8
    }
})

//make this component available to the app
export default EmailAuthSign
