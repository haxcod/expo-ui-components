import * as React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  onBackPress: () => void;
  isMenu: boolean;
  onMenuPress: () => void;
  isSearch: boolean;
  onSearchPress: () => void;
  backgroundColor?: string;
  titleStyle?: TextStyle;
  additionalIcons?: Array<{
    name: string;
    onPress: () => void;
    color?: string;
  }>;
  isElevated?: boolean;
  isLoading?: boolean;
};

const HeaderView: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  isMenu = true,
  onMenuPress,
  isSearch = true,
  onSearchPress,
  backgroundColor = "#f8f8f8",
  titleStyle = {},
  additionalIcons = [],
  isElevated = false,
  isLoading = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor, elevation: isElevated ? 4 : 0 },
      ]}
    >
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        {isLoading && <ActivityIndicator size="small" color="#000" />}
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        {isSearch && (
          <TouchableOpacity onPress={onSearchPress}>
            <MaterialIcons
              name="search"
              size={24}
              color="#000"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        {isMenu && (
          <TouchableOpacity onPress={onMenuPress}>
            <MaterialIcons
              name="menu"
              size={24}
              color="#000"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        {additionalIcons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={icon.onPress}
            style={styles.icon}
          >
            <MaterialIcons
              name={icon.name}
              size={24}
              color={icon.color || "#000"}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 16,
  },
});

export { HeaderView };
