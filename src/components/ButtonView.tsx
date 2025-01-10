import * as React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  ActivityIndicator,
  View,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";

type ButtonViewProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  disabled?: boolean;
  loading?: boolean;
  activeOpacity?: number;
  icon?: React.ReactNode;
  width?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  rippleColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  gap: number;
  textShadowColor?: TextStyle["textShadowColor"];
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: TextStyle["textShadowRadius"];
  fontFamily?: string;
  color: string;
};

const ButtonView: React.FC<ButtonViewProps> = React.memo(
  ({
    text,
    onPress,
    backgroundColor = "#007BFF",
    textColor = "#fff",
    fontSize = 16,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical = 10,
    paddingHorizontal = 20,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
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
    borderColor,
    borderWidth,
    disabledBackgroundColor = "#c0c0c0",
    disabledTextColor = "#808080",
    accessibilityLabel,
    accessibilityHint,
    buttonStyle,
    textStyle,
    textShadowColor,
    textShadowOffset = { width: 0, height: 0 },
    textShadowRadius,
    fontFamily = Platform.OS === "ios" ? "Helvetica" : "Roboto",
    gap = 5,
  }) => {
    const buttonStyles: ViewStyle = StyleSheet.flatten([
      {
        backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
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
        width,
        margin,
        marginVertical,
        marginHorizontal,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      },
      buttonStyle,
    ]);

    const textStyles: TextStyle = StyleSheet.flatten([
      {
        color: disabled ? disabledTextColor : textColor,
        fontSize: fontSize,
        fontWeight: "bold",
        textShadowColor,
        textShadowOffset,
        textShadowRadius,
        fontFamily,
      },
      textStyle,
    ]);

    const renderContent = () => (
      <View style={{ flexDirection: "row", alignItems: "center", gap }}>
        {icon && !loading && <View>{icon}</View>}
        {!loading && <Text style={textStyles}>{text}</Text>}
        {loading && <ActivityIndicator size="small" color={textColor} />}
      </View>
    );

    if (Platform.OS === "android" && rippleColor) {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
          disabled={disabled || loading}
          background={TouchableNativeFeedback.Ripple(
            rippleColor,
            false,
            borderRadius
          )}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        >
          <View style={buttonStyles}>{renderContent()}</View>
        </TouchableNativeFeedback>
      );
    }
    const accessibilityState = disabled || loading ? { disabled: true } : {};

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

export { ButtonView };
