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
import { TextView } from 'expo-ui-components';

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
import { ButtonView } from 'expo-ui-components';

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


### CardView

The `CardView` CardView component is a versatile and reusable container with customizable styles. It is ideal for grouping related UI elements with consistent styling, like cards.

#### Props

- **`children`**** (ReactNode, required)**: The content to render inside the card.
- **`onPress`**** (function, optional)**: Function to execute when the card is pressed. Only works if. `isClickable` is `true`.
- **`cardStyle`**** (ViewStyle, optional)**: Custom styles for the card container.
- **`isClickable`**** (boolean, optional)**: Enables touch interactions if set to `true`. Default is `false`.
- **`activeOpacity`**** (number, optional)**: The opacity when the card is pressed. Only works if `isClickable` is `true`. Default is `0.7`.

#### Example Usage

```javascript
import React from 'react';
import { Text, View } from 'react-native';
import { CardView } from 'expo-ui-components';

const App = () => {
  return (
    <View style={{ padding: 16 }}>
      {/* Non-clickable card */}
      <CardView cardStyle={{ backgroundColor: '#f9f9f9' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Non-Clickable Card</Text>
        <Text>This card does not respond to touch interactions.</Text>
      </CardView>

      {/* Clickable card */}
      <CardView
        cardStyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd' }}
        isClickable
        onPress={() => alert('Card Pressed!')}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Clickable Card</Text>
        <Text>This card responds to touch interactions.</Text>
      </CardView>
    </View>
  );
};

export default App;

```


### HeaderView

The `HeaderView`component is a highly customizable and reusable header for React Native applications. It supports dynamic icon visibility, title styles, and custom actions.

#### Props

- **`title`**** (string, required): The text displayed as the title of the header.
- **`onBackPress`**** (function, required): Function executed when the back button is pressed.

#### Example Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import { HeaderView } from 'expo-ui-components';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderView
        title="Home"
        onBackPress={() => alert('Back Pressed!')}
        isMenu={true}
        onMenuPress={() => alert('Menu Pressed!')}
        isSearch={true}
        onSearchPress={() => alert('Search Pressed!')}
        backgroundColor="#4CAF50"
        titleStyle={{ color: 'white', fontSize: 20 }}
        additionalIcons={[
          { name: 'notifications', onPress: () => alert('Notifications Pressed!'), color: 'yellow' },
          { name: 'settings', onPress: () => alert('Settings Pressed!'), color: 'blue' },
        ]}
        isElevated={true}
        isLoading={false}
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
import { TextView, ButtonView, CardView } from 'expo-ui-components';
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
