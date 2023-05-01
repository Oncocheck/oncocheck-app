import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Administrador from './Administrador';

const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator initialRouteName="Administrador" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Administrador" component={Administrador} />
    </Stack.Navigator>
  );
}

export default Index;