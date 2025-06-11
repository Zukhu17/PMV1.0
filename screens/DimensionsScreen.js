import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import FloatingButtons from '../components/FloatingButtons';
import { useProject } from '../context/ProjectContext';

const DIMENSION_FIELDS = [
  { key: 'superficieConstruida', label: 'Superficie construida', unit: 'm²' },
  { key: 'altura', label: 'Altura', unit: 'm' },
  { key: 'superficieMuros', label: 'Superficie de muros', unit: 'm²' },
  { key: 'superficieTecho', label: 'Superficie de techo', unit: 'm²' },
  { key: 'superficiePiso', label: 'Superficie de piso', unit: 'm²' },
  { key: 'superficieVentanas', label: 'Superficie de ventanas', unit: 'm²' },
];

export default function DimensionesScreen({ navigation }) {
  const { projectData, updateProject } = useProject();

  const [fields, setFields] = useState(() => {
    const initial = {};
    DIMENSION_FIELDS.forEach(({ key }) => {
      initial[key] = projectData.dimensions?.[key] || '';
    });
    return initial;
  });

  const [errors, setErrors] = useState({});

  const isValidNumber = (text) => /^\d+$/.test(text); // solo números enteros positivos

  const handleChange = (key, value) => {
    const updatedFields = { ...fields, [key]: value };
    setFields(updatedFields);

    if (!isValidNumber(value)) {
      setErrors({ ...errors, [key]: 'Solo se permiten números enteros (sin puntos ni comas)' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[key];
      setErrors(newErrors);
    }
  };

  const handleNext = () => {
    const invalid = Object.values(fields).some((value) => !isValidNumber(value));
    if (invalid) {
      Alert.alert('Error', 'Por favor, completa todos los campos correctamente.');
      return;
    }

    updateProject({ dimensions: fields });
    navigation.navigate('Materiales'); // siguiente pantalla
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dimensiones del Proyecto</Text>

      {DIMENSION_FIELDS.map(({ key, label, unit }) => (
        <View key={key} style={styles.inputContainer}>
          <Text style={styles.label}>{label} ({unit})</Text>
          <TextInput
            style={styles.input}
            placeholder={`Ej: 50`}
            value={fields[key]}
            keyboardType="numeric"
            onChangeText={(text) => handleChange(key, text)}
          />
          {errors[key] && <Text style={styles.error}>{errors[key]}</Text>}
        </View>
      ))}

      <FloatingButtons
        onBack={() => navigation.goBack()}
        onNext={handleNext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 6,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
