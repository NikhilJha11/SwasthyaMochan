import { TextStyle, ViewStyle } from 'react-native';

export const darkGreen = '#214f4f';
export const darkGreen600 = '#3a6b6b';
export const darkGreen500 = '#568989';
export const darkGreen400 = '#74a5a5';
export const darkGreen300 = '#97bfbf';
export const darkGreen200 = '#add1d1';
export const darkGreen100 = '#c5e0e0';
export const darkGreen000 = '#eff7f7';

export const lightGreen = '#38abab';
export const customGreen = '#235323';

type SharedStylesTypes = {
  viewStyles: ViewStyle;
  textStyles: TextStyle;
};

export const sharedStyles: SharedStylesTypes = {
  viewStyles: {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
  },
  textStyles: {},
};
