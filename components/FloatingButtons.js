// components/FloatingButtons.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FloatingButtons({ onBack, onNext }) {
  return (
    <View style={styles.floatingButtons}>
      <TouchableOpacity
        style={[styles.fabButton, { backgroundColor: '#888' }]}
        onPress={onBack}
      >
        <Text style={styles.fabText}>Volver</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fabButton, { backgroundColor: '#4CAF50' }]}
        onPress={onNext}
      >
        <Text style={styles.fabText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButtons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fabButton: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
