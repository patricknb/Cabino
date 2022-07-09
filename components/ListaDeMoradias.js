import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button, View } from "react-native";

const DATA = [
  {name:'Moradia ufsc',
   number:123,
   fav:true
  },
  {
    name:'Moradia playa',
    number:342,
    fav:false
  },
  {
    name:'Moraida wow',
    number:156,
    fav:false
  },
  {
    name:'Welon',
    number:156,
    fav:false
  },
  {
    name:'bowya',
    number:156,
    fav:false
  },
];

const data = () => {
  fetch("http://fake-hotel-api.herokuapp.com/api/hotels").then((response)=>{
    response.json()
  }).then((data)=>{
    return data
  })
}


const ListaMoradia = ({route, navigation}) => {

  //função para renderizar um item da lista
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  const Item = ({item}) => (
  <View onPress style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.title}>{'a'}</Text>
    <Button title='Mais informações' onPress={console.log(data)}></Button>
  </View>
  );
//() => {navigation.navigate('Detalhes', {data:item})}

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListaMoradia;