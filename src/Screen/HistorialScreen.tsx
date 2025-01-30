import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistorialScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <Text>Entrenamiento 17/01/2025: 10 km, 200 kcal</Text>
      <Text>Entrenamiento 16/01/2025: 8 km, 180 kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default HistorialScreen;
