import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FloatingButtons from '../components/FloatingButtons';
import { useProject } from '../context/ProjectContext';

export default function OrientationScreen({ navigation }) {
  const { projectData, updateProject } = useProject();
  const [orientation, setOrientation] = useState(projectData.orientation || 'N');

  useEffect(() => {
    updateProject({ orientacion: orientation }); // Guarda la orientación cada vez que cambia
  }, [orientation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona la orientación del proyecto</Text>

      <Picker
        selectedValue={orientation}
        onValueChange={(itemValue) => setOrientation(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Norte" value="N" />
        <Picker.Item label="Este" value="E" />
        <Picker.Item label="Sur" value="S" />
        <Picker.Item label="Oeste" value="O" />
      </Picker>

      <FloatingButtons
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate('Dimensiones')} // Cuando la crees
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  picker: {
    height: 150,
    width: '100%',
  },
  pickerItem: {
    fontSize: 18,
  },
});
