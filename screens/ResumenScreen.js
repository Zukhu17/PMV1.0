import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useProject } from '../context/ProjectContext';
import { guardarProyecto } from '../utils/storage';
import FloatingButtons from '../components/FloatingButtons';

const DIMENSION_FIELDS = [
  { key: 'superficieConstruida', label: 'Superficie construida', unit: 'm²' },
  { key: 'altura', label: 'Altura', unit: 'm' },
  { key: 'superficieMuros', label: 'Superficie de muros', unit: 'm²' },
  { key: 'superficieTecho', label: 'Superficie de techo', unit: 'm²' },
  { key: 'superficiePiso', label: 'Superficie de piso', unit: 'm²' },
  { key: 'superficieVentanas', label: 'Superficie de ventanas', unit: 'm²' },
];

export default function ResumenScreen({ navigation }) {
  const { projectData } = useProject();

  const handleGuardar = async () => {
    try {
      await guardarProyecto(projectData);
      Alert.alert('Éxito', 'Proyecto guardado correctamente.');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el proyecto.');
      console.error('Error al guardar:', error);
    }
    navigation.navigate('Pantalla de carga');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Resumen del Proyecto</Text>

        {/* Ubicación */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📍 Ubicación</Text>
          <Text>
            <Text style={styles.label}>Dirección:</Text>{' '}
            {projectData.ubicacion?.direccion || 'No especificada'}
          </Text>
          <Text>
            <Text style={styles.label}>Coordenadas:</Text>{' '}
            {projectData.ubicacion?.coordenadas
              ? `${projectData.ubicacion.coordenadas.lat}, ${projectData.ubicacion.coordenadas.lon}`
              : 'No especificadas'}
          </Text>
        </View>

        {/* Orientación */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🧭 Orientación</Text>
          <Text>
            {projectData.orientacion
              ? `Orientación hacia el ${projectData.orientacion}`
              : 'No especificada'}
          </Text>
        </View>

        {/* Dimensiones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📐 Dimensiones</Text>
          {DIMENSION_FIELDS.map(({ key, label, unit }) => (
            <Text key={key}>
              <Text style={styles.label}>{label}:</Text>{' '}
              {projectData.dimensions?.[key] || '—'} {unit}
            </Text>
          ))}
        </View>

        {/* Botón para guardar */}
        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>💾 Guardar Proyecto</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botones de navegación */}
      <FloatingButtons
        onBack={() => navigation.goBack()}
        onNext={() => Alert.alert('Info', 'Navegación siguiente aún no implementada')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100, // espacio para que no tape el botón flotante
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
