import { ImageSourcePropType } from 'react-native';

const images = ['Dr.-Harshul'];
export const getAsset = (image: ImageSourcePropType) => {
  return require(`../assets/images/${image}`);
};
