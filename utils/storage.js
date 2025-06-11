// 📁 utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'proyectoActual';

export const guardarProyecto = async (projectData) => {
  try {
    const json = JSON.stringify(projectData);
    await AsyncStorage.setItem(STORAGE_KEY, json);
    console.log('✅ Proyecto guardado');
  } catch (error) {
    console.error('❌ Error al guardar proyecto:', error);
  }
};

export const cargarProyecto = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.error('❌ Error al cargar proyecto:', error);
    return null;
  }
};

export const borrarProyecto = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('🗑️ Proyecto eliminado');
  } catch (error) {
    console.error('❌ Error al eliminar proyecto:', error);
  }
};
