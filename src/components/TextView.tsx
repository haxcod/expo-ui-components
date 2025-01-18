import * as React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Platform,
  TextStyle,
} from "react-native";
import { ComponentsProps } from "../lib/ComponentsProps";

interface TextViewProps extends ComponentsProps {
  isClickable: Boolean;
}

const TextView: React.FC<TextViewProps> = React.memo(
  ({
    children,
    onPress,
    isClickable = false,
    activeOpacity = 0.7,
    textAlign = "left",
    textShadowColor,
    textShadowOffset = { width: 0, height: 0 },
    textShadowRadius,
    fontFamily = Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize = 16,
    color = "#333",
    letterSpacing,
    lineHeight,
    backgroundColor,
    borderRadius,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    accessibilityLabel,
    accessibilityHint,
  }) => {
    const textStyles: TextStyle = StyleSheet.flatten([
      {
        textAlign,
        textShadowColor,
        textShadowOffset,
        textShadowRadius,
        fontFamily,
        fontSize,
        color,
        letterSpacing,
        lineHeight,
        backgroundColor,
        borderRadius,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingVertical,
        paddingHorizontal,
        margin,
        marginVertical,
        marginHorizontal,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      },
    ]);

    if (isClickable) {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={activeOpacity}
          style={{ borderRadius }}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        >
          <Text style={textStyles}>{children}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <Text
        style={textStyles}
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel}
      >
        {children}
      </Text>
    );
  }
);

export { TextView };
