import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import Favoritos from './Favoritos';

const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator initialRouteName="MainPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
    </Stack.Navigator>
  );
}

export default Index;