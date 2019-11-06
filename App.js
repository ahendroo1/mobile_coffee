import React from "react";
import { 
  
  View,  
  Text,
  ActivityIndicator,
  StatusBar,
  Image,
  Button

} from "react-native";
import { 
  createStackNavigator, 
  createAppContainer,
  createSwitchNavigator,

} from "react-navigation";

import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './src/Home';
import LoginScreen from "./src/Login";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  // Login: LoginScreen
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fffd47',
    },
    headerTitle:'Diskuupi',
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const AuthStack = createStackNavigator({Login: LoginScreen})

class AuthLoading extends React.Component{
  constructor(props){
    super(props)
    this._load()
  }

  _load = async() => {
    const _isLogin = await AsyncStorage.getItem('isLogin')
    this.props.navigation.navigate(_isLogin !==  '1' ? 'Auth' : 'App')
  }

  render(){
    return(
      <View>
        <ActivityIndicator />
        
        <Image source={{uri:'https://raw.githubusercontent.com/ahendroo1/vote-diskuupi/master/public/img/diskuupi_1.png'}} />
        <StatusBar barStyle='default' />
      
      </View>
    )
  }
}


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
   
    
  }
));

