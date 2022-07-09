import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button, Image, ScrollView, Linking, Platform, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const DetalhesMoradia = ({route, navigation}) => {

  const atualizarfavorito = async()=>{
    await AsyncStorage.getItem(data.nome).then(
      valor=>{
        data.favorito=valor
      })
  }

  const adicionarfavorito = async() => {
    await AsyncStorage.setItem(data.nome, "s")
    atualizarfavorito()
  }

  const removerfavorito = async() => {
    await AsyncStorage.removeItem(data.nome)
    data.favorito = 'n'
  }

  var {data} = route.params;

  const mapUrl = Platform.select(
    {
    ios:`maps:0,0?q=${data.lat},${data.lng}`,
    android:`geo:0,0?q=${data.lat},${data.lng}`
    }
  )

  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity style={style.button} onPress={()=>{
            data.favorito == 's'?removerfavorito():adicionarfavorito() 
            navigation.navigate('Moradias')}}>
              <Text style={style.buttonText}>{data.favorito == 's'?'Remover dos favoritos':'adicionar aos favoritos'}</Text>
          </TouchableOpacity>

      <ScrollView>
        
        <Image 
          style={style.image}
          source={{uri:data.foto}}
        ></Image>

        <View style={style.containerDetalhes}>

          <Text style={style.sectiontittle, {fontSize:30}}>Informações</Text>
        
          <Text style={style.sectiontittle}>Descrição:</Text>
          <Text style={style.text}>{data.descricao}</Text>

          <Text style={style.sectiontittle}>Tipo de moradia:</Text>
          <Text style={style.text}>{data.tipo_de_moradia}</Text>

          <Text style={style.sectiontittle}>Tipo de alojamento:</Text>
          <Text style={style.text}>{data.tipo_de_alojamento}</Text>

          <Text style={style.sectiontittle}>Área do alojamento:</Text>
          <Text style={style.text}>{data.area_do_alojamento} M²</Text>

          <Text style={style.sectiontittle}>Quantidade de alojamentos:</Text>
          <Text style={style.text}>{data.qtd_alojamentos}</Text>

          <Text style={style.sectiontittle}>Tipo de banheiro:</Text>
          <Text style={style.text}>{data.tipo_de_banheiro}</Text>

          <Text style={style.sectiontittle}>Mobilia:</Text>
          <Text style={style.text}>{data.mobilia}</Text>
        </View>

        <View>
          <TouchableOpacity style={style.button} onPress={()=>{Linking.openURL(mapUrl)}}>
              <Text style={style.buttonText}>{'Localização no mapa'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={()=>{Linking.openURL(`mailto:${data.email}`)}}>
              <Text style={style.buttonText}>{'Entrar em contato por Email'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={()=>{Linking.openURL(`tel:${data.telefone}`)}}>
              <Text style={style.buttonText}>{'Entrar em contato por Telefone'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={()=>{
            Linking.openURL(data.video)
          }}>
            <Text style={style.buttonText}>{'Apresentação do imóvel'}</Text>
          </TouchableOpacity>

          
        </View>

      </ScrollView>
    
    </SafeAreaView>
 );
}

const style = StyleSheet.create({
  container:{
    backgroundColor:'white'
  },
  containerDetalhes:{
    flex:1,
    alignItems:'center'
  },
  sectiontittle: {
    marginTop:4,
    color:'black',
    fontSize:20,
    fontWeight:'bold'
  },
  text: {
    color:'black'
  },
  image:{
    width: 350,
    height:200,
    borderWidth:5
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
  }
})

export default DetalhesMoradia;