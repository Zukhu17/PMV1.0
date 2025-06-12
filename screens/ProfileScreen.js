import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Importa la imagen local (ajusta la ruta si es necesario)
import PerfilImg from '../assets/Perfil.png';

export default function ProfileScreen() {
  const nombre = 'PelaoWeko';
  const usuario = '@Pelao123';
  const numeroProyectos = 12;

  return (
    <LinearGradient colors={['#4CAF50', '#00BCD4']} style={styles.container}>
      <View style={styles.photoPlaceholder}>
        <Image source={PerfilImg} style={styles.photo} />
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
    borderRadius: 60,
    backgroundColor: '#bbb',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // importante para que la imagen quede dentro del círculo
  },
  photo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
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
