import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextStyle,
  StyleProp,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
  isMenu?: boolean;
  onMenuPress?: () => void;
  isSearch?: boolean;
  onSearchPress?: () => void;
  backgroundColor?: string;
  titleStyle?: StyleProp<TextStyle>;
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
  const renderIcons = React.useMemo(
    () => (
      <>
        {isSearch && onSearchPress && (
          <TouchableOpacity
            onPress={onSearchPress}
            style={styles.icon}
            accessibilityRole="button"
            accessibilityLabel="Search"
          >
            <MaterialIcons name="search" size={24} color="#000" />
          </TouchableOpacity>
        )}
        {isMenu && onMenuPress && (
          <TouchableOpacity
            onPress={onMenuPress}
            style={styles.icon}
            accessibilityRole="button"
            accessibilityLabel="Menu"
          >
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        )}
        {additionalIcons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={icon.onPress}
            style={styles.icon}
            accessibilityRole="button"
            accessibilityLabel={icon.name}
          >
            <MaterialIcons
              name={icon.name}
              size={24}
              color={icon.color || "#000"}
            />
          </TouchableOpacity>
        ))}
      </>
    ),
    [isSearch, isMenu, additionalIcons, onSearchPress, onMenuPress]
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor, elevation: isElevated ? 4 : 0 },
      ]}
    >
      {onBackPress && (
        <TouchableOpacity
          onPress={onBackPress}
          style={styles.icon}
          accessibilityRole="button"
          accessibilityLabel="Back"
        >
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        {isLoading && (
          <ActivityIndicator size="small" color="#000" style={styles.loading} />
        )}
        <Text style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.iconContainer}>{renderIcons}</View>
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
  loading: {
    marginRight: 8,
  },
});

export { HeaderView };
