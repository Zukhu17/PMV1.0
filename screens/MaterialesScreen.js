// ./screens/MaterialesScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FloatingButtons from '../components/FloatingButtons';

export default function MaterialesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Materiales de Construcción</Text>

        {/* 🔹 Sección Muros */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Muros</Text>
          {/* Aquí irán los dropdowns o tarjetas */}
        </View>

        {/* 🔹 Sección Techumbre */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Techumbre</Text>
          {/* Aquí irán los dropdowns o tarjetas */}
        </View>

        {/* 🔹 Sección Piso */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Piso</Text>
          {/* Aquí irán los dropdowns o tarjetas */}
        </View>

        {/* 🔹 Sección Ventanas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ventanas</Text>
          {/* Aquí irán los dropdowns o tarjetas */}
        </View>

        {/* 🔸 Resumen dinámico (placeholder) */}
        <View style={styles.summary}>
          <Text style={styles.sectionTitle}>Resumen</Text>
          <Text>Aquí se mostrará un resumen de los materiales seleccionados y costo estimado.</Text>
        </View>
      </ScrollView>

      {/* Botones flotantes abajo */}
      <FloatingButtons
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate('Resumen')} // Cambia por la pantalla real
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100, // Deja espacio para que los botones flotantes no tapen el contenido
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  summary: {
    marginTop: 30,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
