import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, Button
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login = (username, password, email)=> {
    fetch('http://ec2-54-180-93-247.ap-northeast-2.compute.amazonaws.com/api/v1/user/login', {
        method: "PUT",
        headers:{
            'Accept' : 'application/json',
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({ username : username, password : password })
    })
    .then(resp => {console.log(resp)
            return resp.json();
    })
    .then(resp => {
        localStorage.setItem('token', resp.data.token)
    })
    .catch(error => console.log('error'))
}

export default class LoginScreen extends Component{
    
    static navigationOptions = {
        headerShown: false,
    };

    

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>MoodiBuddy</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput 
                        
                        style={styles.textForm} 
                        placeholder={"ID"}
                        onChangeText={(username) => Login(username)}
                        />
                        
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"Password"}
                        onChangeText={(password) => Login(password)}
                        />
                    
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"email"}
                        onChangeText={(email) => Login(email)}
                        />
                </View>
             
                <View style={styles.buttonArea}>
                    
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => Login()}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center',
    },
    titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('10%'),
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
    },
    button: {
        backgroundColor: "#46c3ad",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
})