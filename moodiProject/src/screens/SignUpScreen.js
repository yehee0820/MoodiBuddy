import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useEffect } from 'react';
import axios from 'axios';
import { useLinkProps } from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = useState({
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        check_emailInputChange: false,
        check_textInputChange: false,
        secureTextEntry: true,
        // confirm_secureTextEntry: true,
    });

    
    const emailInputChange = e => {
        e.persist()
        if( e.length !== 0 ) {
            setData({
                ...data,
                email: e.target.data,
                check_emailInputChange: true
            });
        } else {
            setData({
                ...data,
                email: e.target.data,
                check_emailInputChange: false
            });
        }
    }

    const textInputChange = e => {
        e.persist()
        if( e.length !== 0 ) {
            setData({
                ...data,
                username: e.target.data,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: e.target.data,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = e => {
        e.persist()
        setData({
            ...data,
            password: e.target.data
        });
    }

    // const handleConfirmPasswordChange = (e) => {
    //     setData({
    //         ...data,
    //         confirm_password: e.target.data
    //     });
    // }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    // const updateConfirmSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         confirm_secureTextEntry: !data.confirm_secureTextEntry
    //     });
    // }

    //axios로 입력한 데이터 백엔드로 보내기
    
    const handleSubmit = (email, username,password) => {
        axios.post('http://ec2-54-180-93-247.ap-northeast-2.compute.amazonaws.com/api/v1/user/', {email:email, 
    username: username, password: password, grantType: 'OAUTH'}, {
            headers: {'Accept' : 'application/json',
            'Content-type' : 'application/json'}
        }).then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("ERROR", err.res);
          })
    }
    

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#ffee6b' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#4a453f"
                    size={18}
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={data.email}
                    onChange={emailInputChange} required
                />
                {data.check_emailInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#a9d1d9"
                        size={18}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#4a453f"
                    size={18}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={data.username}
                    onChange={textInputChange} required
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#a9d1d9"
                        size={18}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#4a453f"
                    size={18}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={data.password}
                    onChange={handlePasswordChange} required
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={18}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={18}
                    />
                    }
                </TouchableOpacity>
            </View>

            {/* <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#4a453f"
                    size={18}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={18}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={18}
                    />
                    }
                </TouchableOpacity>
            </View> */}
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={handleSubmit}
                    //여기 누르면 axios 또는 fetch로 서버와 연결되도록!
                >
                <LinearGradient
                    colors={['#C6D685', '#c6d685']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#C6D685',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#C6D685'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffee6b'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#4a453f',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#4a453f',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#4a453f',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });