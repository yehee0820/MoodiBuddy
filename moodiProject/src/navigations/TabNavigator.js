import React from 'react';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import DiaryMemo from '../screens/Diarymemo';
import MoodStat from '../screens/MoodStatistics';
import Store from '../screens/Store';
import Community from '../screens/Community';

import HomeChatStack from './StackNavigator';

const Tab = createMaterialBottomTabNavigator ();

const MaterialBottomTabNavigator = () => {
    return(
        <Tab.Navigator 
                shifting = {false}
                initialRouteName = 'Home'
                activeColor= '#806A63'
                inactiveColor= '#84A193'
                barStyle ={{paddingHorizontal: 5, paddingBottom: 5, backgroundColor: '#FFEE6B'}}
                
            >
            <Tab.Screen
                name = 'Diary'
                component ={DiaryMemo}
                options = {{
                    tabBarLabel: 'Diary'
                }}
            />
            <Tab.Screen
                name = 'Stat'
                component ={MoodStat}
                options = {{
                    tabBarLabel: 'Stat'
                }}
            />
            <Tab.Screen
                name = 'Home'
                component ={HomeChatStack}
                options = {{
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name = 'Store'
                component ={Store}
                options = {{
                    tabBarLabel: 'Store'
                }}
            />
            <Tab.Screen
                name = 'Community'
                component ={Community}
                options = {{
                    tabBarLabel: 'Network'
                }}
            />

        </Tab.Navigator>
    )
}

export default MaterialBottomTabNavigator;