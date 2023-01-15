import { ImageSourcePropType } from 'react-native';

const images = ['avatar1'];
export const getAsset = (image: ImageSourcePropType) => {
  return require(`../assets/images/${image}`);
};
