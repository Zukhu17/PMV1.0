// 📄 context/ProjectContext.js
import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
export const ProjectContext = createContext();

// 2. Componente proveedor
export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState({
    location: null,
    orientation: 'N', // por defecto 'N'
    dimensions: {
      largo: '',
      ancho: '',
      altura: '',
    },
    materiales: null,
  });

  // 3. Función para actualizar el estado de forma parcial
  const updateProject = (newData) => {
    setProjectData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <ProjectContext.Provider value={{ projectData, updateProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// 4. Hook personalizado
export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject debe usarse dentro de ProjectProvider');
  }
  return context;
};
