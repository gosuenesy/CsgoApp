import React from 'react';
import { Text, View, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../FirebaseConfig'

class Login extends React.Component {
    constructor () {
        super();
        this.state = {
            email: "",
            pass: ""
        }
    }
    register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, this.state.email, this.state.pass)
            Alert.alert("Account registered", "Welcome " + auth.currentUser?.email)
        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }
    login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, this.state.email, this.state.pass)
            Alert.alert("Signed in", "Welcome " + auth.currentUser?.email)
        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }
    logout = async () => {
        if (auth.currentUser !== null) {
            try {
                Alert.alert("Signed out", auth.currentUser?.email)
                await signOut(auth);
            } catch (error) {
                Alert.alert("Error", error.message)
            }
        }
    }
    render() {
        return (
            <View>
                <Text>{'\n'}{'\n'}</Text>
                <Text style={{textAlign: "center", fontSize: 18}}>{auth.currentUser?.email}</Text>
                <Text>{'\n'}{'\n'}</Text>
                <Input placeholder='E-mail' keyboardType="email-address" inputStyle={{color:"white"}} containerStyle={{backgroundColor:"#27272F", margin: 8, width: 344}} leftIcon={{ type: 'material', name: 'email', color: 'white' }}
                onChangeText={(value) => {this.setState({ email: value })}} />
                <Input placeholder='Password' secureTextEntry={true} inputStyle={{color:"white"}} containerStyle={{backgroundColor:"#27272F", margin: 8, width: 344}} leftIcon={{ type: 'material', name: 'lock', color: 'white' }}
                onChangeText={(value) => {this.setState({ pass: value })}} />
                <View style={{flexDirection: "row"}}>
                    <Button title="REGISTER" onPress={this.register} buttonStyle={{backgroundColor: "#1EB980", width: 162, margin: 9}}/>
                    <Button title="SIGN IN" onPress={this.login} buttonStyle={{backgroundColor: "#1EB980", width: 162, margin: 9}}/>
                </View>
                <Button title="SIGN OUT" onPress={this.logout} buttonStyle={{backgroundColor: "#1EB980", width: 162, margin: 9, marginLeft: 96}}/>
            </View>
        );
    }
}
export default Login;