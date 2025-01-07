import * as React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Platform,
  TextStyle,
} from "react-native";

type TextViewProps = {
  text: string;
  style?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  isClickable?: boolean;
  activeOpacity?: number;
  textAlign?: TextStyle["textAlign"];
  textShadowColor?: TextStyle["textShadowColor"];
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: TextStyle["textShadowRadius"];
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  letterSpacing?: number;
  lineHeight?: number;
  backgroundColor?: string;
  borderRadius?: number;
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
  textTransform?: TextStyle["textTransform"];
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

const TextView: React.FC<TextViewProps> = React.memo(
  ({
    text = "",
    style,
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
    textTransform,
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
        textTransform,
      },
      style,
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
          <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <Text
        style={textStyles}
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel}
      >
        {text}
      </Text>
    );
  }
);

export { TextView };
