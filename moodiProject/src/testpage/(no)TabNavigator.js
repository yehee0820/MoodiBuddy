import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import DiaryMemo from '../screens/Diarymemo';
import MoodStat from '../screens/MoodStatistics';
import MainPage from '../screens/MainPage';
import Store from '../screens/Store';
import Community from '../screens/Community';
import Login from '../screens/MainLogin';

const TabNavigator = createMaterialBottomTabNavigator(
    {
      Diary: {
        screen: DiaryMemo,
        navigationOptions: {
          tabBarLabel: 'Diary',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon style={[{color: tintColor}]} size={30} name={'library-outline'} />
            </View>
          ),
          activeColor: '#AB7B6D',
          inactiveColor: '#FFEEDF',
          barStyle: {backgroundColor: '#F2D586'},
        },
      },
      Stat: {
        screen: MoodStat,
        navigationOptions: {
          tabBarLabel: 'Stat',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={30}
                name={'bar-chart-outline'}
              />
            </View>
          ),
          activeColor: '#AB7B6D',
          inactiveColor: '#FFEEDF',
          barStyle: {backgroundColor: '#F2D586'},
        },
      },
      Home: {
        screen: MainPage,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={30}
                name={'rose-outline'}
              />
            </View>
          ),
          activeColor: '#AB7B6D',
          inactiveColor: '#FFEEDF',
          barStyle: {backgroundColor: '#F2D586'},
        },
      },
      Store: {
        screen: Store,
        navigationOptions: {
          tabBarLabel: 'Store',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={30}
                name={'storefront-outline'}
              />
            </View>
          ),
          activeColor: '#AB7B6D',
          inactiveColor: '#FFEEDF',
          barStyle: {backgroundColor: '#F2D586'},
        },
      },
      Community: {
        screen: Community,
        navigationOptions: {
          tabBarLabel: 'Network',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={30}
                name={'people-outline'}
              />
            </View>
          ),
          activeColor: '#AB7B6D',
          inactiveColor: '#FFEEDF',
          barStyle: {backgroundColor: '#F2D586'},
        },
      },
    },
    {
      initialRouteName: 'Home',
      shifting: true,
    },
  );
  
  const App = createStackNavigator({
    screen: Login,
    TabNavigator: {
      screen: TabNavigator
    },
  });

  export default createAppContainer(App);