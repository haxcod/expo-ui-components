import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
type ButtonViewProps = {
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
};
declare const ButtonView: React.FC<ButtonViewProps>;
export default ButtonView;
