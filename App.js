import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,
  TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  COLOR_PINK,COLOR_PINK_LIGHT,COLOR_FACEBOOK,COLOR_PINK_MEDIUM
} from './MyColor'

const Divider = (props) =>{
  return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.texOR}>OR</Text>
        <View style={styles.line}></View>
  </View>
}

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

  

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.up}>
        <Ionicons name="finger-print-outline"
          size={50}
          color={COLOR_PINK}
        >

        </Ionicons>
        <Text style={styles.title}>Đạo Kaka</Text>
      </View>

      <View style={styles.down}>
          <View style={styles.textInputContainer}> 
              <TextInput style={styles.textInput}
              textContentType='emailAddress'
              keyboardType="email-address"
              placeholder='Enter your Email'
              ></TextInput>
          </View>
          <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
              placeholder='Enter your password'
              secureTextEntry={true}

              ></TextInput>
          </View>
          <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitile}>
                LOGIN
              </Text>
          </TouchableOpacity>

          <Divider style={styles.divider}></Divider>

          <FontAwesome.Button 
          style={styles.fbButton}
          name="facebook"
          backgroundColor={COLOR_FACEBOOK}
          >
            <Text style={styles.loginButtonTitile}>
                Login With FaceBook
            </Text>
          </FontAwesome.Button>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PINK_LIGHT,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },

  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems:'center',  
  },
  title: {
    color:'rbg(259,199,34)',
    color: "white",
    textAlign: 'center',
    width: 400,
    fontSize: 23,
  },
  textInputContainer:{
      paddingHorizontal:10,
      borderRadius:10,
      marginTop:10,
      backgroundColor:'rgba(255,255,255,0.3)',
  },
  textInput:{
        width:280,
        height:45,
  },
  loginButton:{
      width:300,
      height:45,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:COLOR_PINK
  },
  loginButtonTitile:{
      fontSize:18,
      color:'white',

  },
  fbButton:{
      width:300,
      height:45,
      borderRadius:6,
      justifyContent:'center',
      
  },
  line:{
    height:1,
    flex:2,
    backgroundColor:'black'
  },
  texOR:{
    flex:1,
    textAlign:'center',
  },
  divider:{
    flexDirection:'row',
    height:45,
    width:298,
    justifyContent:'center',
    alignItems:'center',
  },
});
