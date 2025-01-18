import * as React from "react";
import { ReactNode } from "react";
import { GestureResponderEvent, TextStyle, ViewStyle, ImageStyle } from "react-native";

export interface ComponentsProps {
  // Basic Props
  /** Content that is displayed within the component */
  children: ReactNode;

  /** Function that is called when the component is pressed */
  onPress: (event: GestureResponderEvent) => void;

  // Background and Color
  /** Background color of the component */
  backgroundColor?: string;

  /** Text color of the component */
  textColor?: string;

  /** General color property (can be used for any color-related styling) */
  color?: string;

  // Typography
  /** Font size of the text */
  fontSize?: number;

  /** Font weight of the text (e.g., "bold", "normal") */
  fontWeight?: TextStyle["fontWeight"];

  /** Font style of the text (e.g., "italic") */
  fontStyle?: TextStyle["fontStyle"];

  /** Letter spacing of the text */
  letterSpacing?: number;

  /** Line height of the text */
  lineHeight?: number;

  /** Text alignment (e.g., "center", "left", "right") */
  textAlign?: TextStyle["textAlign"];

  /** Text decoration line (e.g., "underline", "line-through") */
  textDecorationLine?: TextStyle["textDecorationLine"];

  /** Font family for the text */
  fontFamily?: string;

  // Padding
  /** Padding around the component */
  padding?: number;

  /** Vertical padding (top + bottom) */
  paddingVertical?: number;

  /** Horizontal padding (left + right) */
  paddingHorizontal?: number;

  /** Padding at the top of the component */
  paddingTop?: number;

  /** Padding at the bottom of the component */
  paddingBottom?: number;

  /** Padding at the left of the component */
  paddingLeft?: number;

  /** Padding at the right of the component */
  paddingRight?: number;

  // Margin
  /** Margin around the component */
  margin?: number;

  /** Vertical margin (top + bottom) */
  marginVertical?: number;

  /** Horizontal margin (left + right) */
  marginHorizontal?: number;

  /** Margin at the top of the component */
  marginTop?: number;

  /** Margin at the bottom of the component */
  marginBottom?: number;

  /** Margin at the left of the component */
  marginLeft?: number;

  /** Margin at the right of the component */
  marginRight?: number;

  // Border
  /** Border radius of the component */
  borderRadius?: number;

  /** Border width of the component */
  borderWidth?: number;

  /** Border color of the component */
  borderColor?: string;

  /** Border style of the component (e.g., "solid", "dashed") */
  borderStyle?: ViewStyle["borderStyle"];

  // Shadow (iOS) / Elevation (Android)
  /** Shadow color (iOS only) */
  shadowColor?: string;

  /** Shadow offset (iOS only) */
  shadowOffset?: { width: number; height: number };

  /** Shadow opacity (iOS only) */
  shadowOpacity?: number;

  /** Shadow radius (iOS only) */
  shadowRadius?: number;

  /** Elevation for Android (controls the shadow) */
  elevation?: number;

  // Positioning and Layout
  /** Width of the component */
  width?: number | string;

  /** Height of the component */
  height?: number | string;

  /** Maximum width of the component */
  maxWidth?: number | string;

  /** Maximum height of the component */
  maxHeight?: number | string;

  /** Minimum width of the component */
  minWidth?: number | string;

  /** Minimum height of the component */
  minHeight?: number | string;

  /** Flex value for flexbox layout */
  flex?: number;

  /** Flex grow value for flexbox layout */
  flexGrow?: number;

  /** Flex shrink value for flexbox layout */
  flexShrink?: number;

  /** Flex basis for flexbox layout */
  flexBasis?: number | string;

  /** Flex direction for flexbox layout (e.g., "row", "column") */
  flexDirection?: ViewStyle["flexDirection"];

  /** Alignment of children along the cross axis in flexbox */
  alignItems?: ViewStyle["alignItems"];

  /** Justification of children along the main axis in flexbox */
  justifyContent?: ViewStyle["justifyContent"];

  /** Alignment of the component itself along the cross axis in flexbox */
  alignSelf?: ViewStyle["alignSelf"];

  /** Overflow handling for the component */
  overflow?: ViewStyle["overflow"];

  /** Position of the component (e.g., "absolute", "relative") */
  position?: ViewStyle["position"];

  /** Position from the top of the container */
  top?: number | string;

  /** Position from the bottom of the container */
  bottom?: number | string;

  /** Position from the left of the container */
  left?: number | string;

  /** Position from the right of the container */
  right?: number | string;

  /** Z-index for layering */
  zIndex?: number;

  // Images
  /** Resize mode for images (e.g., "contain", "cover") */
  resizeMode?: ImageStyle["resizeMode"];

  /** Tint color for images */
  tintColor?: string;

  // Interaction
  /** Whether the component is disabled */
  disabled?: boolean;

  /** Whether the component is loading (e.g., showing a loading spinner) */
  loading?: boolean;

  /** Opacity when the component is pressed */
  activeOpacity?: number;

  /** Color of the ripple effect for Android */
  rippleColor?: string;

  // Accessibility
  /** Label for accessibility purposes */
  accessibilityLabel?: string;

  /** Hint for accessibility purposes */
  accessibilityHint?: string;

  // Animations and Transitions
  /** Transformation (e.g., scaling, rotation) applied to the component */
  transform?: ViewStyle["transform"];

  /** Opacity of the component */
  opacity?: number;

  // Customization Props
  /** Icon to be displayed alongside the text */
  icon?: React.ReactNode;

  /** Gap between the icon and text */
  gap?: number;

  // Custom Styles
  /** Custom style for the button component */
  buttonStyle?: ViewStyle;

  /** Custom style for the text */
  textStyle?: TextStyle;

  /** Custom container style */
  containerStyle?: ViewStyle;

  /** Custom style for images */
  imageStyle?: ImageStyle;

  // Text Shadows
  /** Text shadow color */
  textShadowColor?: TextStyle["textShadowColor"];

  /** Text shadow offset */
  textShadowOffset?: TextStyle["textShadowOffset"];

  /** Text shadow radius */
  textShadowRadius?: TextStyle["textShadowRadius"];
}
