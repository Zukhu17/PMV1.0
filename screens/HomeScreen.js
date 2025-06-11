// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Genera una precalificación de tu proyecto</Text>
      <Button title="Analiza tu proyecto" onPress={() => navigation.navigate('Ubicación')} />
    </View>
  );
}
