import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/Screen/SignInScreen';
import PerfilScreen from './src/Screen/PerfilScreen';
import HistorialScreen from './src/Screen/HistorialScreen';
import AvanceScreen from './src/Screen/AvanceScreen';
import RegisterScreen from './src/Screen/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="CrearCuenta" component={RegisterScreen} />
        <Stack.Screen name="DetallesCarga" component={AvanceScreen} />
        <Stack.Screen name="Historial" component={HistorialScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
