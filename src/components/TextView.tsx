import * as React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle, StyleSheet } from "react-native";

type TextViewProps = {
  text: string;
  style?: TextStyle;
  onPress?: () => void;
  isClickable: boolean;
  activeOpacity?: number;
  containerStyle?: ViewStyle; 
};

const TextView: React.FC<TextViewProps> = ({
  text,
  style,
  onPress,
  isClickable,
  activeOpacity = 0.7,
  containerStyle,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={isClickable ? activeOpacity : 1}
        style={[styles.clickableContainer, containerStyle]}  // Apply container style
      >
        <Text style={[styles.text, style]}>{text}</Text>
      </TouchableOpacity>
    );
  }
  
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16, 
    fontFamily: "Roboto", 
    color: "#333",  
  },
  clickableContainer: {
    padding: 8, 
    backgroundColor: "#007BFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { TextView };
