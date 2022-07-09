import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const DetalhesMoradia = ({route, navigation}) => {

  var {data} = route.params;

  return (
    <View style={style.container}>
      <Text>HELLO WORLD</Text>
      <Text>{data.name}</Text>
      <Text>{data.city}</Text>
      <Text>{data.price}</Text>
    </View>
 );
}

const style = StyleSheet.create({
  container:{
    backgroundColor:'gray'
  }
})

export default DetalhesMoradia;