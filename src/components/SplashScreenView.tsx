import * as React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const defaultGradientColors = ["#4c669f", "#3b5998", "#192f6a"] as const;

type SplashScreenProps = {
  logo?: ImageSourcePropType;
  backgroundColor?: string;
  gradientColors?: readonly [string, string, ...string[]];
  text?: string;
  textColor?: string;
  textFontSize?: number;
  duration?: number;
  onFinish?: () => void;
  animationType?: "fade" | "slide";
  showSkip?: boolean;
  skipText?: string;
  skipButtonStyle?: ViewStyle;
  skipTextStyle?: TextStyle;
  textStyle?: TextStyle;
};

const SplashScreenView: React.FC<SplashScreenProps> = React.memo(
  ({
    logo,
    backgroundColor = "#fff",
    gradientColors = defaultGradientColors,
    text = "Welcome",
    textColor = "#000",
    textFontSize = 24,
    duration = 3000,
    onFinish,
    animationType = "fade",
    showSkip = true,
    skipText = "Skip",
    skipButtonStyle,
    skipTextStyle,
    textStyle,
  }) => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [translateY] = useState(new Animated.Value(50));

    useEffect(() => {
      const startAnimation = () => {
        const animationConfig = {
          toValue: animationType === "fade" ? 1 : 0,
          duration: 1000,
          useNativeDriver: true,
        };
        Animated.timing(
          animationType === "fade" ? fadeAnim : translateY,
          animationConfig
        ).start();
      };

      startAnimation();
      const timer = setTimeout(() => onFinish && onFinish(), duration);

      return () => clearTimeout(timer);
    }, [animationType, fadeAnim, translateY, duration, onFinish]);

    const handleSkip = () => {
      fadeAnim.stopAnimation();
      translateY.stopAnimation();
      onFinish && onFinish();
    };

    const renderContent = () => (
      <>
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
            style={[
              styles.text,
              textStyle,
              { color: textColor, fontSize: textFontSize },
            ]}
          >
            {text}
          </Text>
        </Animated.View>
        {showSkip && (
          <TouchableOpacity
            style={[styles.skipButton, skipButtonStyle]}
            onPress={handleSkip}
            accessibilityRole="button"
            accessibilityLabel="Skip splash screen"
          >
            <Text style={[styles.skipText, skipTextStyle]}>{skipText}</Text>
          </TouchableOpacity>
        )}
      </>
    );

    return gradientColors ? (
      <LinearGradient colors={gradientColors} style={styles.container}>
        {renderContent()}
      </LinearGradient>
    ) : (
      <View style={[styles.container, { backgroundColor }]}>
        {renderContent()}
      </View>
    );
  }
);

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
