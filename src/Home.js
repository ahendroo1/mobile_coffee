import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Ionicons from 'react-native-ionicons'
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Component/HomeScreen';
import SettingsScreen from './Component/SettingScreen';
import MenuScreen from './Component/MenuScreen';


export default createAppContainer(createBottomTabNavigator({
  Home: HomeScreen,
  Menu: MenuScreen,
  Settings: SettingsScreen,
},{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Menu') {
          iconName = `ios-cafe`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }));

// export default createAppContainer(TabNavigator);