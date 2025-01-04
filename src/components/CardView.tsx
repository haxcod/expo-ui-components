import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import * as React from "react";

type CardViewProps = {
  children: React.ReactNode;
  cardStyle?: ViewStyle;
  isClickable?: boolean;
  activeOpacity?: number;
  onPress?: () => void;
};

const CardView: React.FC<CardViewProps> = ({
  children,
  cardStyle,
  isClickable = false,
  activeOpacity = 0.7,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={isClickable ? activeOpacity : 1}
      onPress={onPress}
    >
      <View style={[styles.card, cardStyle]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 16,
  },
});

export { CardView };
