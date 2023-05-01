import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

const Stack = createStackNavigator();

function Index() {
  return (
    <Stack.Navigator initialRouteName="ScreenLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScreenLogin" component={Login} />
    </Stack.Navigator>
  );
}

export default Index;