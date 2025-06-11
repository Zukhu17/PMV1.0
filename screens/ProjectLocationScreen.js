import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import { useProject } from '../context/ProjectContext';
import FloatingButtons from '../components/FloatingButtons';

Geocoder.init('AIzaSyDChkt3E2l8DMh2KBbCWwUoT0ZZ2XRjiZc');

export default function ProjectLocationScreen({ navigation }) {
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState({
    latitude: -33.4489,
    longitude: -70.6693,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [marker, setMarker] = useState(null);

  const { updateProject } = useProject(); // ✅ cambio aquí

const handleSearch = async () => {
  try {
    const result = await Geocoder.from(address);
    const location = result.results[0].geometry.location;

    const newRegion = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    setRegion(newRegion);
    setMarker({ latitude: location.lat, longitude: location.lng });

    // ✅ Corrección aquí
    updateProject({
      ubicacion: {
        direccion: address,
        coordenadas: {
          lat: location.lat,
          lon: location.lng,
        },
      },
    });

  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'No se pudo encontrar la dirección');
  }
};


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa dirección"
          value={address}
          onChangeText={setAddress}
        />
        <Button title="Buscar dirección" onPress={handleSearch} />
        <MapView style={styles.map} region={region}>
          {marker && <Marker coordinate={marker} />}
        </MapView>
      </View>

      {/* ✅ Usar tu componente común de botones */}
      <FloatingButtons
        onBack={() => navigation.goBack()}
        onNext={() => navigation.navigate('Orientacíon')} // Asegúrate de que el nombre sea correcto
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
  },
  map: {
    flex: 1,
  },
});
