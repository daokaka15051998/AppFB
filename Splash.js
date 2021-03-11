import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Animated,Dimensions,
  TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  COLOR_PINK,COLOR_PINK_LIGHT,COLOR_FACEBOOK,COLOR_PINK_MEDIUM
} from './MyColor'


export default class Splash extends Component{
    render(){
        return <View style={styles.container}>
                    <Image sourece={require("..Logo.png")}>

                    </Image>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: COLOR_PINK_LIGHT
    }
})