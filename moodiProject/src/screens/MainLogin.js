import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, Button
} from 'react-native';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class LoginScreen extends Component{
    constructor(props) {
        super(props);

        this.state ={
            username: "",
            password: "",
            email: "",
            grantType: "OAUTH",
            isLogin: null
        };
    }

    handleId = inputText => {
        this.setState({
            username: inputText
        });
    };

    handlePW = inputText => {
        this.setState({
            password: inputText
        });
    };

    handleEmail = inputText => {
        this.setState({
            email: inputText
        })
    }

    //로그인 버튼 클릭 시 서버로 데이터 전송
    handleSubmit = e => {
        e.preventDefault();

        const Login = {
            method: "POST",
            body:JSON.stringify({ username : this.state.id , password : this.state.password ,email : this.state.email, grantType: 'OAUTH'}),
            headers:{
                    Accept: "application/json",
                    'Content-type' : 'application/json'
                }
        };
        fetch("http://ec2-54-180-93-247.ap-northeast-2.compute.amazonaws.com/api/v1/user/", Login)
            .then(res => {
                return res.json();
            })
            .then(json => {
                if (json.success === true) {
                    alert('로그인되었습니다');
                    window.localStorage.setItem('userInfo', JSON.stringify(json))
                    this.setState({
                        username : json.username,
                        password: json.password,
                        email: json.email,
                        isLogin: json.success,
                        grantType: "OAUTH"
                    });
                    
                }else {
                    alert("아이디 혹은 비밀번호를 확인하세요")
                }
            })
    }
    
    static navigationOptions = {
        headerShown: false,
    };
    
    render(){
    
        return (           
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>MoodiBuddy</Text>
                </View>
                <View onSubmit = {this.handleSubmit} style={styles.formArea}>
                    <TextInput 
                        
                        style={styles.textForm} 
                        placeholder={"ID"}
                        value = {this.state.username}
                        onChangeText={this.handleId}
                        />
                        
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"Password"}
                        value = {this.state.password}
                        onChangeText={this.handlePW}
                        textContentType = 'password'
                        />
                    
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"email"}
                        value = {this.state.email}
                        onChangeText={this.handleEmail}
                        />
                </View>
             
                <View style={styles.buttonArea}>
                    
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.handleSubmit}>
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