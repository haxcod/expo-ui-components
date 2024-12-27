import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonViewProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  activeOpacity?: number;
};

const ButtonView: React.FC<ButtonViewProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
  activeOpacity = 8,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
});
