import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { ProjectProvider } from './context/ProjectContext';

export default function App() {
  return (
    <ProjectProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ProjectProvider>
  );
}
