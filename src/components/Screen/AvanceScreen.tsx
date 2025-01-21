import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AvanceScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avance</Text>
      <Text>Distancia: 10 km</Text>
      <Text>Tiempo: 30 minutos</Text>
      <Text>Calorías: 200 kcal</Text>
      <Text>Batería: 50%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default AvanceScreen;
