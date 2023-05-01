import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import CadastroUsuario from './CadastroUsuario';

const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator initialRouteName="ScreenLogin" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScreenLogin" component={Login} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
    </Stack.Navigator>
  );
}

export default Index;