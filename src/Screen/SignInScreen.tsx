import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/Navigation';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SignInScreen'>;
};

const SignInScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={() => navigation.navigate('PerfilScreen')} />
      <Button title="Crear Cuenta" onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 },
});

export default SignInScreen;
