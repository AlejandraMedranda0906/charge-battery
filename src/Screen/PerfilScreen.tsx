import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PerfilScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text>Nombre: Juan Pérez</Text>
      <Text>Nickname: Juanky23</Text>
      <Text>Email: juanperez@example.com</Text>
      <Text>Edad: 25</Text>
      <Text>Peso: 70 kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default PerfilScreen;
