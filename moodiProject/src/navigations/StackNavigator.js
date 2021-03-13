import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from '../screens/MainPage';
import MainPage from '../screens/MainLogin';
import ChatbotDiary from '../screens/ChatbotDiary';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();

const HomeChatStack = () => {
    return (
        <Stack1.Navigator initialRouteName = 'Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ffee6b",
                },
                headerTitleStyle: {
                    color: '#60292c', fontSize: 22, fontFamily: 'Baloo2-ExtraBold'
                },
                headerTitleAlign: 'center'

            }}
            >
            <Stack1.Screen name='Home' component={MainPage} options={{ headerTitle: 'MoodiBuddy'
                                            }}/>
            <Stack1.Screen name='Chat' component={ChatbotDiary} 
                            options={{headerBackTitleVisible: false,
                                    headerTintColor: 'black', headerShown: false}}/>
        </Stack1.Navigator>

    )
}

const LoginStack = () => {
    return (
        <Stack2.Navigator initialRouteName = 'Login'
            screenOptions={{}}>
            <Stack2.Screen name = 'Login' component={MainLogin}
                            options={{}}
            />
            <Stack2.Screen name = 'Home' component={MainPage}
                            options={{}}
            />
            <Stack2.Screen/>
        </Stack2.Navigator>
    )
}

export default {HomeChatStack, LoginStack} ;