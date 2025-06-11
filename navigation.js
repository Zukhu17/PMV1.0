import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProjectLocationScreen from './screens/ProjectLocationScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyProjectsScreen from './screens/MyProjectsScreen';
import OrientationScreen from './screens/OrientationScreen';
import DimensionesScreen from './screens/DimensionsScreen'; 
import ResumenScreen from './screens/ResumenScreen';
import MaterialesScreen from'./screens/MaterialesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Mis Proyectos" component={MyProjectsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabs" 
        component={TabNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Ubicación" 
        component={ProjectLocationScreen} 
        options={{ title: 'Ubicación' }}
      />
      <Stack.Screen 
        name="Orientacíon" 
        component={OrientationScreen} 
        options={{ title: 'Orientacíon' }}
      />
      <Stack.Screen 
        name="Dimensiones" 
        component={DimensionesScreen} 
        options={{ title: 'Dimensiones' }}
      />
      <Stack.Screen 
        name="Resumen" 
        component={ResumenScreen} 
        options={{ title: 'Resumen' }}
      />
      <Stack.Screen 
        name="Materiales" 
        component={MaterialesScreen} 
        options={{ title: 'Materiales' }}
      />
    </Stack.Navigator>
  );
}
