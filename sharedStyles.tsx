import { TextStyle, ViewStyle } from 'react-native';

export const darkGreen = '#214f4f';
export const darkGreen1 = '#308585';
export const darkGreen2 = '#1e5f5f';
export const darkGreen3 = '#154444';
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
