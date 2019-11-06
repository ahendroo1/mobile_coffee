import React, { Component } from "react";
import { 
    Text, 
    View, 
    Button,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SettingScreen extends Component {

    constructor(props){
        super(props)
    }

    removeStorage = () =>{
        AsyncStorage.removeItem('isLogin')
        this.props.navigation.navigate('Login');
        // alert('Remove')
    }

    logout = () => {
        // if(!AsyncStorage.getItem('isLogin')){
            Alert.alert(
                'Diskuupi',
                'Logout Account',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => this.removeStorage()},
                ],
                {cancelable: false},
              );
        // } else {
        //     alert('Login Failer');
        // }
    }

    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting!</Text>
            <Button 
        
                onPress={() => this.logout()}
                title='Logout'
            />
        </View>
        );
    }

}

export default SettingScreen ;