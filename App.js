import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Lista from './components/ListaDeMoradias'
import DetalhesMoradia from './components/DetalhesMoradia'

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator InitialRouteName='Lista'>
        <Screen name='Lista' component={Lista}/>
        <Screen name='Detalhes' component={DetalhesMoradia}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default App;