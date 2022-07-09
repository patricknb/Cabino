import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Lista from './ListaDeMoradias'
import DetalhesMoradia from './DetalhesMoradia'
import ListaFavoritos from './Favoritos'

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator InitialRouteName='Moradias'>
        <Screen name='Moradias' component={Lista}/>
        <Screen name='Detalhes' component={DetalhesMoradia} options={({route}) => ({title: route.params.title})}/>
        <Screen name='Favoritos' component={ListaFavoritos}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;