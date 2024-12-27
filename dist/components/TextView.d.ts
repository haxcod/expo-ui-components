import * as React from "react";
import { TextStyle } from "react-native";
type TextViewProps = {
    text: string;
    style?: TextStyle;
    onPress?: () => void;
    isClickable: false;
    activeOpacity?: number;
};
declare const TextView: React.FC<TextViewProps>;
export default TextView;
