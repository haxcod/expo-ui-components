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
  activeOpacity = 0.7,
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
    elevation: 0,
    shadowOpacity: 0,
  },
});

export { ButtonView };
