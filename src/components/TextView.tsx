import * as React from "react";
import { Text, TextStyle, TouchableOpacity } from "react-native";

type TextViewProps = {
  text: string;
  style?: TextStyle;
  onPress?: () => void;
  isClickable: false;
  activeOpacity?: number;
};

const TextView: React.FC<TextViewProps> = ({
  text,
  style,
  onPress,
  isClickable,
  activeOpacity = 8,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={isClickable ? activeOpacity : 10}
      >
        <Text style={style}>{text}</Text>
      </TouchableOpacity>
    );
  }
  return <Text style={style}>{text}</Text>;
};

export default TextView;
