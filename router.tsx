import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroUsuario from './screens/CadastroUsuario';
import Login from './screens/Login';

export type NativeStackParamList = {
  Login: undefined,
  CadastroUsuario: undefined
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CadastroUsuario'
          component={CadastroUsuario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
