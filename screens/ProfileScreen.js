import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  // Datos de ejemplo
  const nombre = 'Pelao Wko';
  const usuario = '@Pelao123';
  const numeroProyectos = 1;

  return (
    <LinearGradient colors={['#4CAF50', '#00BCD4']} style={styles.container}>
      <View style={styles.photoPlaceholder}>
        {/* Aquí luego puedes poner un <Image> o icono */}
      </View>

      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.usuario}>{usuario}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Proyectos creados:</Text>
        <Text style={styles.infoValue}>{numeroProyectos}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60, // círculo
    backgroundColor: '#bbb', // gris claro
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  usuario: {
    fontSize: 18,
    color: '#e0f7fa',
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    width: '80%',
    justifyContent: 'space-between',
  },
  infoLabel: {
    color: '#fff',
    fontSize: 16,
  },
  infoValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
