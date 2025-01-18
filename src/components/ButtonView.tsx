import * as React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
  View,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";

import { ComponentsProps } from "../lib/ComponentsProps";


interface ButtonProps extends ComponentsProps {
  disabledBackgroundColor: string;
  disabledTextColor: string;
  iconPosition?: "left" | "right";
}

const ButtonView: React.FC<ButtonProps> = React.memo(
  ({
    children,
    onPress,
    backgroundColor = "#007BFF",
    textColor = "#fff",
    fontSize = 16,
    paddingVertical = 10,
    paddingHorizontal = 20,
    disabled = false,
    loading = false,
    activeOpacity = 0.7,
    icon,
    width,
    shadowColor = "#000",
    shadowOffset = { width: 0, height: 2 },
    shadowOpacity = 0.25,
    shadowRadius = 3.84,
    elevation = 5,
    rippleColor,
    borderRadius = 10,
    disabledBackgroundColor = "#c0c0c0",
    disabledTextColor = "#808080",
    accessibilityLabel,
    accessibilityHint,
    buttonStyle,
    textStyle,
    fontFamily = Platform.OS === "ios" ? "Helvetica" : "Roboto",
    gap = 5,
    iconPosition = "left",
    borderColor,
    borderWidth,
  }) => {
    const buttonStyles: ViewStyle = StyleSheet.flatten([
      {
        backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
        paddingVertical,
        paddingHorizontal,
        justifyContent: "center",
        alignItems: "center",
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
        elevation,
        borderRadius,
        borderColor,
        borderWidth,
        width:100, // Ensure that width is either string or number
      },
      buttonStyle,
    ]);

    const textStyles: TextStyle = StyleSheet.flatten([
      styles.text,
      {
        color: disabled ? disabledTextColor : textColor,
        fontSize: fontSize,
        fontFamily,
      },
      textStyle,
    ]);

    const renderContent = () => (
      <View
        style={[
          styles.content,
          { gap },
          iconPosition === "right" && styles.reverseContent, // Aligning based on icon position
        ]}
      >
        {icon && iconPosition === "left" && !loading && <View>{icon}</View>}
        {!loading && <Text style={textStyles}>{children}</Text>}
        {icon && iconPosition === "right" && !loading && <View>{icon}</View>}
        {loading && <ActivityIndicator size="small" color={textColor} />}
      </View>
    );

    if (Platform.OS === "android" && rippleColor) {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          disabled={disabled || loading}
          background={TouchableNativeFeedback.Ripple(rippleColor, false, borderRadius)}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        >
          <View style={buttonStyles}>{renderContent()}</View>
        </TouchableNativeFeedback>
      );
    }

    const accessibilityState = { disabled: disabled || loading };

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={disabled ? 1 : activeOpacity}
        style={buttonStyles}
        disabled={loading || disabled}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityState={accessibilityState}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  reverseContent: {
    flexDirection: "row-reverse", // This makes sure the icon is positioned to the right
  },
});

export { ButtonView };
