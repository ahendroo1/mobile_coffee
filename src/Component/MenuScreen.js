import React, { Component } from "react";
import { Text, View, Button } from 'react-native';

class MenuScreen extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Menu!</Text>
            
        </View>
        );
    }

}

export default MenuScreen ;