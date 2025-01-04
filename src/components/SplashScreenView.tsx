import * as React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type SplashScreenProps = {
  logo?: ImageSourcePropType;
  backgroundColor?: string;
  gradientColors?: [string, string, ...string[]];
  text?: string;
  textColor?: string;
  textFontSize?: number;
  duration?: number;
  onFinish?: () => void;
  animationType?: "fade" | "slide";
  showSkip?: boolean;
};

const SplashScreenView: React.FC<SplashScreenProps> = ({
  logo,
  backgroundColor = "#000",
  gradientColors = ["#000", "#333"],
  text = "Welcome",
  textColor = "#fff",
  textFontSize = 24,
  duration = 3000,
  onFinish,
  animationType = "fade",
  showSkip = true,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(50));

  useEffect(() => {
    Animated.timing(animationType === "fade" ? fadeAnim : translateY, {
      toValue: animationType === "fade" ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={gradientColors}
      style={[styles.container, { backgroundColor }]}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          animationType === "fade"
            ? { opacity: fadeAnim }
            : { transform: [{ translateY }] },
        ]}
      >
        {logo && (
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        )}
        <Text
          style={[styles.text, { color: textColor, fontSize: textFontSize }]}
        >
          {text}
        </Text>
      </Animated.View>
      {showSkip && (
        <TouchableOpacity style={styles.skipButton} onPress={onFinish}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
  },
  skipButton: {
    position: "absolute",
    bottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
  },
  skipText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export { SplashScreenView };
