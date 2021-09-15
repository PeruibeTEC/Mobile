import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const scale = width / 375;

export default function normalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
}
