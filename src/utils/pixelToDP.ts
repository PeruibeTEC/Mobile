import { Dimensions, PixelRatio } from 'react-native';

const width = (numberOfPixels: number): number => {
  const screenWidth = Dimensions.get('window').width;

  const percentage = (numberOfPixels / 375) * 100;

  return PixelRatio.roundToNearestPixel((screenWidth * percentage) / 100);
};

const height = (numberOfPixels: number): number => {
  const screenHeight = Dimensions.get('window').height;

  const percentage = (numberOfPixels / 667) * 100;

  return PixelRatio.roundToNearestPixel((screenHeight * percentage) / 100);
};

const pixelToDP = { width, height };

export default pixelToDP;
