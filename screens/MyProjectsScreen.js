// ./screens/MyProjectsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyProjectsScreen() {
  const navigation = useNavigation();

  const handleCrearProyecto = () => {
    navigation.navigate('Ubicación'); // o la primera pantalla de creación
  };

  const handleVerProyectos = () => {
    Alert.alert('Función en desarrollo', 'Aquí iría la lista de proyectos creados.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Proyectos</Text>

      <View style={styles.buttonContainer}>
        <Button title="➕ Crear Nuevo Proyecto" onPress={handleCrearProyecto} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="📋 Ver Proyectos Guardados" onPress={handleVerProyectos} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="🏠 Volver al Inicio" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
