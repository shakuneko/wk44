import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const Menu = () => {
    return (
        <View style={styles.frame4}>
        <Image style={styles.icon1} source={require("./icon/home.png")}/>
        <Image style={styles.icon2} source={require("./icon/search.png")}/>
        <Image style={styles.icon3} source={require("./icon/add2.png")}/>
        <Image style={styles.icon4} source={require("./icon/like.png")}/>
        <Image style={styles.icon5} source={require("./icon/ii.png")}/>
      </View>
    );
};

const styles = StyleSheet.create({
    frame4: {
        flexDirection:'row',
        borderTopColor:'#EEEEEE',
        borderTopWidth:1.5,
        justifyContent: 'flex-start',
        backgroundColor:'#FAFAFA',
        width:500,
        height:100,
        top:-145
      },
      icon1: {
        width:75,
        height:75,
        left:5,
        top:-18
      },
      icon2: {
        width:23,
        height:23,
        left:35,
        top:10
      },
      icon3: {
        width:23,
        height:23,
        left:95,
        top:10
      },
      icon4: {
        width:23,
        height:23,
        left:155,
        top:10
      },
      icon5: {
        width:23,
        height:23,
        left:215,
        top:10
      },
      });

      export default Menu;
      