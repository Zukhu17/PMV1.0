import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyProjectsScreen() {
  const navigation = useNavigation();

  const handleCrearProyecto = () => {
    navigation.navigate('Ubicación');
  };

  const handleVerProyectos = () => {
    Alert.alert('Función en desarrollo', 'Aquí iría la lista de proyectos creados.');
  };

  return (
    <LinearGradient
      colors={['#4CAF50', '#00BCD4']} // igual que Inicio: verde a celeste
      style={styles.container}
    >
      <Text style={styles.title}>Mis Proyectos</Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleCrearProyecto}>
        <Text style={styles.buttonText}>➕ Crear Nuevo Proyecto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleVerProyectos}>
        <Text style={styles.buttonText}>📋 Ver Proyectos Guardados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>🏠 Volver al Inicio</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#fff', // título blanco para que se vea bien sobre el fondo
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
