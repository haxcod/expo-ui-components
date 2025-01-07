import * as React from "react";
import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  AccessibilityProps,
} from "react-native";

type CardViewProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowOffset?: { width: number; height: number };
  shadowRadius?: number;
  elevation?: number;
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
  fullWidth?: boolean;
  cardStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
} & AccessibilityProps;

const CardView: React.FC<CardViewProps> = ({
  children,
  backgroundColor = "#fff",
  borderColor,
  borderWidth,
  borderRadius = 8,
  shadowColor = "#000",
  shadowOpacity = 0.1,
  shadowOffset = { width: 0, height: 2 },
  shadowRadius = 4,
  elevation = 3,
  padding,
  paddingVertical = 16,
  paddingHorizontal = 16,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginVertical = 10,
  marginHorizontal = 16,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fullWidth = false,
  cardStyle,
  accessibilityLabel = "Card",
  accessibilityHint,
}) => {
  const cardStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    {
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      shadowColor,
      shadowOpacity,
      shadowOffset,
      shadowRadius,
      elevation,
      padding,
      paddingVertical,
      paddingHorizontal,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginVertical,
      marginHorizontal,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      width: fullWidth ? "100%" : undefined,
    },
    cardStyle,
  ]);

  return (
    <View
      style={cardStyles}
      accessibilityRole="none"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      {children}
    </View>
  );
};

export { CardView };
