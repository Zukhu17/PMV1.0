¡Perfecto Maxi! Vamos paso a paso para que puedas correr tu app de React Native localmente y comiences a construir la interfaz que diseñaste en Figma.

---

## 🛠 Paso 1: Configurar el entorno de desarrollo

### 1.1 Instala Node.js

Descárgalo desde: [https://nodejs.org](https://nodejs.org)
Asegúrate de instalar la versión LTS (Long-Term Support).

### 1.2 Instala Expo CLI (recomendado para empezar con React Native)

En tu terminal o PowerShell:

```bash
npm install -g expo-cli
```

### 1.3 Crea tu proyecto

```bash
expo init eficiencia-vivienda
```

Selecciona el template: **"blank (TypeScript o JavaScript)"**
Navega a la carpeta del proyecto:

```bash
cd eficiencia-vivienda
```

---

## 🚀 Paso 2: Corre tu proyecto localmente

```bash
npm start
```

Se abrirá el navegador con la interfaz de Expo. Puedes:

* Escanear el código QR con la app "Expo Go" (disponible en Android e iOS)
* O elegir "Run on Android device/emulator" si tienes Android Studio

---

## 📦 Paso 3: Estructura base de carpetas (recomendado)

```plaintext
eficiencia-vivienda/
│
├── assets/               # imágenes, íconos
├── components/           # componentes como botones, tarjetas, brújula
├── screens/              # cada pantalla de la app
│   ├── HomeScreen.js
│   ├── UbicacionScreen.js
│   └── OrientacionScreen.js
├── App.js                # navegación principal
└── package.json
```

---

## 🧭 Paso 4: Instala librerías necesarias

### 4.1 Navegación (tabs)

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

### 4.2 Mapa (para ubicación del proyecto)

```bash
expo install react-native-maps
```

---

## 🧱 Paso 5: Estructura de navegación básica

En `App.js`:

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UbicacionScreen from './screens/UbicacionScreen';
import OrientacionScreen from './screens/OrientacionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Mis proyectos" component={UbicacionScreen} />
        <Tab.Screen name="Perfil" component={OrientacionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

---

## 🟦 Siguiente paso

Cuando confirmes que esto corre bien, seguimos con:

1. **Diseñar `HomeScreen`** como la primera imagen que me mostraste.
2. **Implementar el mapa** en `UbicacionScreen` con marcador.
3. **Crear una brújula interactiva o visual** para `OrientacionScreen`.

¿Probamos levantar el entorno hasta aquí? Puedo ayudarte si te da algún error o necesitas el código base de alguna de las pantallas.
