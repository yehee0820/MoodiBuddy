// import React from 'react';
// import {
//     Text
// } from 'react-native';
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";

// import LoginScreen from './MainLogin';
// import HomeScreen from './MainPage';
// import DiaryScreen from './Diarymemo';
// import StatScreen from './MoodStatistics';
// import CommuScreen from './Community';
// import StoreScreen from './Store';
// import SigninScreen from './Signin';

// const HomeStack = createStackNavigator(
//     {
//         HomeScreen
//     },
//     { defaultNavigationOptions : ({navigation}) => ({ 
//         title: 'Home'}),
//     }
    
// );

// const DiaryStack = createStackNavigator(
//     {
//         DiaryScreen
//     },
//     { defaultNavigationOptions : ({navigation}) => ({ 
//         title: 'Diary'}),
//     }
    
// );

// const StatStack = createStackNavigator(
//     {
//         StatScreen
//     },
//     { defaultNavigationOptions : ({navigation}) => ({ 
//         title: 'Stat'}),
//     }
    
// );

// const CommunityStack = createStackNavigator(
//     {
//         CommuScreen
//     },
//     { defaultNavigationOptions : ({navigation}) => ({ 
//         title: 'Network'}),
//     }
    
// );

// const StoreStack = createStackNavigator(
//     {
//         StoreScreen
//     },
//     { defaultNavigationOptions : ({navigation}) => ({ 
//         title: 'Store'}),
//     }
    
// );

// const TabNavigator = createBottomTabNavigator(
//     InitialRouteName = 'Home',
//     {
//         Diary: DiaryStack,
//         Stat: StatStack,
//         Home: HomeStack,
//         Network: CommunityStack,
//         Store: StoreStack,
        
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => ({
//             tabBarIcon: ({focused, horizontal, tintColor}) => {
//                 const {routeName} = navigation.state;
//                 let icon = "▲";

//                 if(routeName === 'Diary'){
//                     icon = "📓";
//                 } else if(routeName === 'Stat'){
//                     icon = "📊"
//                 } else if(routeName === 'Home'){
//                     icon = "🍎"
//                 } else if(routeName === 'Network'){
//                     icon = "👫"
//                 } else if(routeName === 'Store'){
//                     icon = "🛍"
//                 }

//                 // can use react-native-vector-icons
//                 // <Icon name={iconName} size={iconSize} color={iconColor} />
//                 return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
//             }
//         }),
//         lazy: false,
//         tabBarOptions: {
//             activeTintColor: "#46c3ad",
//             inactiveTintColor: "#888",
            
//         },
//     }
// );

// const AppStack = createStackNavigator(
//     {
//         SigninScreen: SigninScreen,
//         LoginScreen: LoginScreen,
//         TabNavigator: {
//             screen: TabNavigator,
//             navigationOptions: ({navigation}) => ({
//                 headerShown: false,
//             }),
//         },
//     }
// );

// export default createAppContainer(AppStack);
