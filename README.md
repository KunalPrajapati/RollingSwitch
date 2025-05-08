# React Native Rolling Switch

![npm version](https://img.shields.io/npm/v/rollingswitch.svg)
![license](https://img.shields.io/npm/l/rollingswitch.svg)

A beautifully animated switch component for React Native with two stylish variants:
- **Standard Rolling Switch** - with smooth 360° rotation and customizable text
- **Sun/Moon Rolling Switch** - elegant day/night toggle with atmospheric effects

<img src="https://res.cloudinary.com/df5pvp91v/image/upload/RollingSwitch_nbyenv.gif" width="170" height="400" alt="demo video"  />

## Installation

```bash
npm install rollingswitch
# or
yarn add rollingswitch
```

This package requires `react-native-reanimated` version 2 or higher:

```bash
npm install react-native-reanimated react-native-gesture-handler
# or
yarn add react-native-reanimated react-native-gesture-handler
```

Follow the [Reanimated installation instructions](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) to complete the setup.

## Usage

### Standard Rolling Switch

A switch that rotates while toggling, with customizable ON/OFF text:

```jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RollingSwitch } from 'rollingswitch';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <RollingSwitch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        onColor="#4CAF50"
        offColor="#607D8B"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

### Sun/Moon Switch

A switch that transforms between sun and moon icons, perfect for light/dark mode toggles:

```jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RollingMoonSwitch } from 'rollingswitch';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <RollingMoonSwitch
        value={isDarkMode}
        onValueChange={(value) => setIsDarkMode(value)}
        dayColor="#87CEEB"
        nightColor="#1a237e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Props

### RollingSwitch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | boolean | `false` | The current state of the switch |
| `onValueChange` | function | - | Callback when the value changes |
| `containerStyle` | object | `{}` | Additional styles for the container |
| `ballStyle` | object | `{}` | Additional styles for the rolling ball |
| `onColor` | string | `'#4CAF50'` | Background color when switch is ON |
| `offColor` | string | `'#607D8B'` | Background color when switch is OFF |
| `onTextColor` | string | `'white'` | Text color for ON label |
| `offTextColor` | string | `'white'` | Text color for OFF label |
| `inactiveTextOpacity` | number | `0.4` | Opacity for inactive text |
| `onText` | string | `'ON'` | Text shown when switch is ON |
| `offText` | string | `'OFF'` | Text shown when switch is OFF |
| `indicatorColor` | string | `'#E53935'` | Color of the rotation indicator |
| `disabled` | boolean | `false` | Disables the switch when true |

### RollingMoonSwitch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | boolean | `false` | The current state of the switch |
| `onValueChange` | function | - | Callback when the value changes |
| `containerStyle` | object | `{}` | Additional styles for the container |
| `ballStyle` | object | `{}` | Additional styles for the rolling ball |
| `dayColor` | string | `'#87CEEB'` | Background color for day mode (OFF) |
| `nightColor` | string | `'#1a237e'` | Background color for night mode (ON) |
| `disabled` | boolean | `false` | Disables the switch when true |

## Features

### Standard Switch
- Smooth 360° rotation when toggling
- Clockwise rotation when turning ON, counter-clockwise when turning OFF
- Customizable ON/OFF text labels
- Visible rotation indicator
- Fully customizable colors

### Moon/Sun Switch
- Beautiful animated transition between Sun and Moon
- Dynamic background elements (stars at night, clouds during day)
- Realistic sun with radial glow effect
- Detailed moon with craters
- Perfect for dark/light theme toggles

## Examples

### Custom Styled Standard Switch

```jsx
<RollingSwitch
  value={isEnabled}
  onValueChange={setIsEnabled}
  onColor="#9C27B0"
  offColor="#455A64"
  onText="YES"
  offText="NO"
  onTextColor="#E1BEE7"
  offTextColor="#CFD8DC"
  indicatorColor="#FF4081"
  containerStyle={{
    width: 120,
    height: 60,
    borderRadius: 30,
  }}
  ballStyle={{
    width: 50,
    height: 50,
    borderRadius: 25,
  }}
/>
```

### Custom Styled Moon Switch

```jsx
<RollingMoonSwitch
  value={isDarkMode}
  onValueChange={setIsDarkMode}
  dayColor="#FFB74D"  // Sunset orange
  nightColor="#3F51B5" // Deep blue
  containerStyle={{
    width: 120,
    height: 60,
    borderRadius: 30,
  }}
/>
```

## How it Works

The RollingSwitch library uses React Native Reanimated for smooth animations:

- **RollingSwitch**: Uses `useAnimatedStyle`, `withSpring` and `withTiming` to create fluid transitions. When toggled, the ball moves horizontally and rotates 360 degrees in the appropriate direction.

- **RollingMoonSwitch**: Animates between sun and moon states with beautifully designed elements. The background changes color while celestial elements (stars/clouds) fade in and out.


## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Credits

Created by [KunalPrajapati](https://github.com/KunalPrajapati)