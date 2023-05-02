import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import Favoritos from './Favoritos';
import PesquisaListagem from './pesquisa/Pesquisa-Listagem';
import PesquisaDetalhe from './pesquisa/Pesquisa-Detalhe';
import Inconsistencia from './pesquisa/Inconsistencia';

const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator initialRouteName="MainPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="Pesquisa" component={PesquisaListagem} />
        <Stack.Screen name="Detalhe" component={PesquisaDetalhe} />
        <Stack.Screen name="Inconsistencia" component={Inconsistencia} />
    </Stack.Navigator>
  );
}

export default Index;