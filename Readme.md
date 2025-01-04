Here’s an updated `README.md` file including the `SplashScreenView` component:

---

# expo-ui-components

This library provides reusable and customizable UI components for React Native projects. It is designed to streamline the development process and ensure consistency across applications.

---

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the library.

```bash
npm i expo-ui-components
```

---

## Current Components

### 1. SplashScreenView

The `SplashScreenView` component provides a customizable splash screen for React Native applications with animations, gradients, and a skip button.

#### Props

- **`logo`** (any, optional): Image source for the logo.
- **`backgroundColor`** (string, optional): Background color of the splash screen (default: `#000`).
- **`gradientColors`** (string[], optional): Array of gradient colors for the background (default: `["#000", "#333"]`).
- **`text`** (string, optional): Text to display (default: `"Welcome"`).
- **`textColor`** (string, optional): Color of the text (default: `#fff`).
- **`textFontSize`** (number, optional): Font size of the text (default: `24`).
- **`duration`** (number, optional): Duration of the splash screen in milliseconds (default: `3000`).
- **`onFinish`** (function, optional): Callback function to execute when the splash screen finishes.
- **`animationType`** (`"fade"` | `"slide"`, optional): Type of animation (default: `"fade"`).
- **`showSkip`** (boolean, optional): Whether to show a skip button (default: `true`).

#### Example Usage

```javascript
import React from "react";
import SplashScreenView from "expo-ui-components";

const App = () => {
  const handleFinish = () => {
    console.log("Splash Screen Finished");
  };

  return (
    <SplashScreenView
      logo={require("./assets/logo.png")}
      backgroundColor="#123456"
      gradientColors={["#123456", "#abcdef"]}
      text="Welcome to My App"
      textColor="#ffffff"
      textFontSize={28}
      duration={4000}
      onFinish={handleFinish}
      animationType="slide"
      showSkip={true}
    />
  );
};

export default App;
```

---

### 2. TextView

The `TextView` component is a simple and customizable component for displaying text.

#### Props

- **`text`** (string, required): The content to display.
- **`style`** (TextStyle, optional): Custom styles for the text.
- **`onPress`** (function, optional): Function to execute when the text is pressed.

#### Example Usage

```javascript
import { TextView } from "expo-ui-components";

<TextView
  text="Hello, World!"
  style={{ fontSize: 18, color: "blue" }}
  onPress={() => alert("Text pressed!")}
/>;
```

---

### 3. ButtonView

The `ButtonView` component is a versatile button with customizable styles and states.

#### Props

- **`title`** (string, required): The text to display on the button.
- **`onPress`** (function, required): Function to execute when the button is pressed.
- **`buttonStyle`** (ViewStyle, optional): Custom styles for the button container.
- **`textStyle`** (TextStyle, optional): Custom styles for the button text.
- **`disabled`** (boolean, optional): Disables the button if set to `true`.

#### Example Usage

```javascript
import { ButtonView } from "expo-ui-components";

<ButtonView
  title="Click Me"
  buttonStyle={{ backgroundColor: "green", padding: 10 }}
  textStyle={{ color: "white", fontSize: 16 }}
  onPress={() => alert("Button pressed!")}
/>;
```

---

### 4. CardView

The `CardView` component is a reusable container with customizable styles.

#### Props

- **`children`** (ReactNode, required): Content inside the card.
- **`onPress`** (function, optional): Callback for touch interaction (enabled only if `isClickable` is `true`).
- **`cardStyle`** (ViewStyle, optional): Custom styles for the card container.
- **`isClickable`** (boolean, optional): Enables touch interactions (default: `false`).
- **`activeOpacity`** (number, optional): Opacity when the card is pressed (default: `0.7`).

#### Example Usage

```javascript
import { CardView } from "expo-ui-components";

<CardView
  cardStyle={{ backgroundColor: "#fff" }}
  isClickable
  onPress={() => alert("Card Pressed!")}
/>;
```

---

### 5. HeaderView

The `HeaderView` component is a customizable header for React Native applications.

#### Props

- **`title`** (string, required): The text displayed as the title of the header.
- **`onBackPress`** (function, required): Callback for back button press.
- **`isMenu`** (boolean, optional): Whether to display a menu icon.
- **`onMenuPress`** (function, optional): Callback for menu button press.
- **`isSearch`** (boolean, optional): Whether to display a search icon.
- **`onSearchPress`** (function, optional): Callback for search button press.
- **`backgroundColor`** (string, optional): Header background color.
- **`titleStyle`** (TextStyle, optional): Custom styles for the title text.
- **`isElevated`** (boolean, optional): Adds elevation/shadow to the header.

#### Example Usage

```javascript
import { HeaderView } from "expo-ui-components";

<HeaderView
  title="Home"
  onBackPress={() => alert("Back Pressed!")}
  isMenu
  onMenuPress={() => alert("Menu Pressed!")}
  backgroundColor="#4CAF50"
/>;
```

---

## Upcoming Components

- **InputField**: A styled input component for text entry.
- **ImageView**: A customizable image component with placeholders and loading indicators.

---

## Usage

Import and use the available components in your React Native project:

```javascript
import {
  SplashScreenView,
  TextView,
  ButtonView,
  CardView,
  HeaderView,
} from "expo-ui-components";
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Let me know if additional sections need to be added!