import React from "react";
import { 
    View,
    Text,
    TextInput,
    Button,
    Image
} from "react-native";

// import { Image } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

const userInfo = {
    username: 'admin',
    password:'12345'
}

class Login extends React.Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {}
    }

    login = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            await AsyncStorage.setItem('isLogin', '1')
            this.props.navigation.navigate('Home');
        } else {
            alert('Login Failer');
        }
    }
    

    render(){

        const img = 'https://raw.githubusercontent.com/ahendroo1/vote-diskuupi/master/public/img/diskuupi_1.png';
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fffd47' }}>
                
                <Image source={{uri:'https://raw.githubusercontent.com/ahendroo1/vote-diskuupi/master/public/img/diskuupi_1.png'}} />
                <TextInput 
                    style={{ width:'100%', paddingLeft:30,paddingRight:30 }}
                    autoCapitaliz="none"
                    placeholder="Username"
                    onChangeText={(username) => this.setState({username})}
                />

                <TextInput 

                    style={{ width:'100%', paddingLeft:30, paddingRight:30}}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                />

                <Button
                    style={{justifyContent:'right'}}
                    onPress={() => this.login()}
                    title="Login"
                    // color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }

} 

export default Login ;