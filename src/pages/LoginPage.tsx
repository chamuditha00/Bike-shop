import { Text,View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import BackgroundSvg from '../assets/svg/BackgroundSvg';

function LoginPage({navigation}:any)  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const validateLogin = (username:String, password:string) => {

        if(username === '' || password === ''){
            Alert.alert('Please fill in the required fields');
        }
        else if(username === 'admin' && password === 'admin'){
            return true;
        }else{
            Alert.alert('Invalid Username or Password');
        }
    }
    const navigateToLandingPage = () => {
      
        if(validateLogin(username, password)){
            setLogin(true);
            if(login){
            navigation.navigate('LandingPage');
            }
        }
    }

    return(
        <View style={styles.background}>
           
            <Text style={styles.titleTxt}>Login Page</Text>
            <TextInput
                editable
                style={styles.container}
                placeholderTextColor={'#999898'}
                placeholder='Username'
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                editable
                secureTextEntry
                style={styles.container}
                placeholderTextColor={'#999898'}
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}/>
                
            
            <TouchableOpacity style={styles.button} onPress={navigateToLandingPage}>
                <Text style={styles.loginTxt}>LogIn</Text>
                </TouchableOpacity>
                <BackgroundSvg/>
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#242C3B',
        flex: 1,    
    },
    container: {
        fontSize: 20,
        alignSelf: 'center',
        borderColor: '#ffffff',
        borderWidth: 2,
        margin: 20,
        width: 300,
        height: 50,
        borderRadius: 10,
        color: '#ffffff',
        padding: 10,
    },
    button:{
        alignSelf: 'center',
        backgroundColor: 'blue',
        color: 'white',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20,

    },
    loginTxt:{
        fontSize: 20,
        color: 'white',
    },
    titleTxt:{
        marginTop: 100,
        fontSize: 30,
        color: '#ffffff',
        alignSelf: 'center',
        margin: 20,
    }
})


