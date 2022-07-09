import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import data from '../database/db.JSON'

const Favoritos = ({route, navigation}) => {

  const renderItem = ({ item }) => {
    if(item.favorito == "s"){
      return(
        <Item item={item}/>
      )
    }
  };

  const Item = ({item}) => (
  <View style={styles.item}>
    <Image style={styles.img} source={{uri:item.foto}}></Image>
    <Text style={styles.title}>{item.nome}</Text>
    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Detalhes', {data:item, title:item.nome})}}>
        <Text style={styles.buttonText}>
          Mais informações
        </Text>
      </TouchableOpacity>
  </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button:{
    alignSelf:'center',
    alignItems:'center',
    margin: 4,
    padding: 10,
    width: 300,
    backgroundColor:'#6ac6e5',
    borderRadius:10
  },
  buttonText:{
    fontSize:18,
    color:'white'
  },
  title: {
    fontSize: 24,
    alignSelf:'center'
  },
  img: {
    height:200,
    width:250,
    alignSelf:'center'
  }
});

export default Favoritos;