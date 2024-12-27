# UI Components Library

## Overview

This library provides reusable and customizable UI components for React Native projects. It is designed to streamline the development process and ensure consistency across applications.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the library.

```bash
npm i expo-ui-components
```

## Current Components

### TextView

The `TextView` component is a simple and customizable component for displaying text.

#### Props

- **`text`**** (string, required)**: The content to display.
- **`style`**** (TextStyle, optional)**: Custom styles for the text.
- **`onPress`**** (function, optional)**: Function to execute when the text is pressed.

#### Example Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import TextView from './components/TextView';

const App = () => {
  return (
    <View style={{ padding: 16 }}>
      <TextView
        text="Hello, World!"
        style={{ fontSize: 18, color: 'blue' }}
        onPress={() => alert('Text pressed!')}
      />
    </View>
  );
};

export default App;
```

### ButtonView

The `ButtonView` component is a versatile button with customizable styles and states.

#### Props

- **`title`**** (string, required)**: The text to display on the button.
- **`onPress`**** (function, required)**: Function to execute when the button is pressed.
- **`buttonStyle`**** (ViewStyle, optional)**: Custom styles for the button container.
- **`textStyle`**** (TextStyle, optional)**: Custom styles for the button text.
- **`disabled`**** (boolean, optional)**: Disables the button if set to true.

#### Example Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import ButtonView from './components/ButtonView';

const App = () => {
  return (
    <View style={{ padding: 16 }}>
      <ButtonView
        title="Click Me"
        buttonStyle={{ backgroundColor: 'green', padding: 10 }}
        textStyle={{ color: 'white', fontSize: 16 }}
        onPress={() => alert('Button pressed!')}
      />
    </View>
  );
};

export default App;
```

## Upcoming Components

- **InputField**: A styled input component for text entry.
- **CardView**: A container component with shadow and border options.

These components will be added incrementally to enhance the library's capabilities.

## Usage

Import and use the available components in your React Native project:

```javascript
import { TextView, ButtonView } from '@your-namespace/ui-components';
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
