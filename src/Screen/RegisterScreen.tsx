import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Types/Navigation';



type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'RegisterScreen'>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <TextInput placeholder="Nombre" style={styles.input} />
      <TextInput placeholder="Nickname" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Edad" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Peso (kg)" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
      <Button title="Registrarse" onPress={() => navigation.navigate('SignInScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 },
});

export default RegisterScreen;
