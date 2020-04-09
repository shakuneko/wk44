import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const Header = () => {
return (
    <View style={styles.frame}>
    <Image style={styles.camera} source={require("./icon/camera.png")}/>
    <Image style={styles.sign} source={require('./icon/sign.png')}/>
    <Image style={styles.box} source={require('./icon/box.png')}/>
  </View>
  );
};

const styles = StyleSheet.create({
    
    frame: {
      flexDirection:'row',
      borderBottomColor:'#EEEEEE',
      borderBottomWidth:1.5,
      justifyContent: 'space-around',
      backgroundColor:'#FAFAFA',
      width:500,
      height:100,
    },
    camera: {
      width:27,
      height:27,
      top:62,
      left:-28
      
    },
    sign: {
      width:120,
      height:40,
      top:55,
      left:-30
    },
    box: {
      width:50,
      height:50,
      top:50,
      left:-42
    },
});

export default Header;