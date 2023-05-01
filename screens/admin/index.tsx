import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Administrador from './Administrador';
import GerenciarUsuarios from './gerenciar/Gerenciar-Usuarios';
import GerenciarExames from './gerenciar/Gerenciar-Exames';
import ConsultarInconsistencias from './gerenciar/Consultar-Inconsistencias';

const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator initialRouteName="Administrador" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Administrador" component={Administrador} />
      <Stack.Screen name="GerenciarUsuarios" component={GerenciarUsuarios} />
      <Stack.Screen name="GerenciarExames" component={GerenciarExames} />
      <Stack.Screen name="ConsultarInconsistencias" component={ConsultarInconsistencias} />
    </Stack.Navigator>
  );
}

export default Index;