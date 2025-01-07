import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextStyle,
  ViewStyle,
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
  headerStyle?: StyleProp<ViewStyle>;
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
  borderRadius?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  additionalIcons?: Array<{
    name: string;
    onPress: () => void;
    color?: string;
  }>;
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
  headerStyle = {},
  padding,
  paddingVertical = 16,
  paddingHorizontal = 16,
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
  borderRadius = 8,
  shadowColor = "#000",
  shadowOffset = { width: 0, height: 2 },
  shadowOpacity = 0.1,
  shadowRadius = 4,
  elevation = 4,
  additionalIcons = [],
  isLoading = false,
}) => {
  const headerStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    {
      backgroundColor,
      borderRadius,
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
      shadowColor,
      shadowOffset,
      shadowOpacity,
      shadowRadius,
      elevation,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerStyle,
  ]);

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
    <View style={headerStyles}>
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
