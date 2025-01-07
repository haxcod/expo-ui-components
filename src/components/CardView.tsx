import * as React from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  AccessibilityProps,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type CardViewProps = {
  children: React.ReactNode;
  cardStyle?: StyleProp<ViewStyle>;
  isClickable?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  activeOpacity?: number;
  gradientColors?: [string, string, ...string[]];
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowOffset?: { width: number; height: number };
  shadowRadius?: number;
  elevation?: number;
  fullWidth?: boolean;
  accessibilityLabel?: string;
} & AccessibilityProps;

const CardView: React.FC<CardViewProps> = ({
  children,
  cardStyle,
  isClickable = false,
  onPress,
  activeOpacity = 0.7,
  gradientColors,
  borderColor,
  borderWidth,
  borderRadius,
  shadowColor = "#000",
  shadowOpacity = 0.1,
  shadowOffset = { width: 0, height: 2 },
  shadowRadius = 4,
  elevation = 3,
  fullWidth = false,
  accessibilityLabel,
}) => {
  const cardStyles = React.useMemo(
    () =>
      [
        styles.card,
        cardStyle,
        borderColor && { borderColor, borderWidth },
        borderRadius && { borderRadius },
        fullWidth && { width: "100%" },
        {
          shadowColor,
          shadowOpacity,
          shadowOffset,
          shadowRadius,
          elevation,
        },
      ].filter(Boolean) as ViewStyle[],
    [
      cardStyle,
      borderColor,
      borderWidth,
      borderRadius,
      fullWidth,
      shadowColor,
      shadowOpacity,
      shadowOffset,
      shadowRadius,
      elevation,
    ]
  );

  const CardContent = React.useMemo(
    () =>
      gradientColors ? (
        <LinearGradient
          colors={gradientColors.length >= 2 ? gradientColors : ["#fff", "#fff"]}
          style={[...cardStyles, { overflow: "hidden" }]}
        >
          {children}
        </LinearGradient>
      ) : (
        <View style={cardStyles}>{children}</View>
      ),
    [gradientColors, cardStyles, children]
  );
  if (isClickable && onPress) {
    return (
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? activeOpacity : 1 },
          borderRadius && { borderRadius },
        ]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel || "Card"}
        accessible
      >
        {CardContent}
      </Pressable>
    );
  }

  return CardContent;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 16,
  },
});

export { CardView };
