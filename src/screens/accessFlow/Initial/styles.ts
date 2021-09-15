import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Dimensions, PixelRatio } from 'react-native';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

import mapSvg from '../../../assets/mapSvg.svg';

const widthPercentageToDP = (widthPercent: string): number => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

const heightPercentageToDP = (heightPercent: string): number => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
};

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight + 16}px 30px 16px 30px;
`;

export const MapSvg = styled(mapSvg)`
  width: ${widthPercentageToDP('80%')};
  height: ${heightPercentageToDP('30%')};
`;

export const TextGroup = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${fonts.robotoBold};
  text-align: center;
  color: ${colors.light.gray900};
`;

export const Description = styled.Text`
  margin-top: 16px;
  font-size: 18px;
  font-family: ${fonts.robotoMedium};
  line-height: 24px;
  text-align: center;
  color: ${colors.light.gray700};
`;

export const ButtonGroup = styled.View`
  width: 100%;
`;

export const PrimaryButton = styled(RectButton)`
  width: 100%;
  height: 56px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${colors.light.primary700};
  border-radius: 8px;
`;

export const ContentButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 12px;

  font-size: 18px;
  font-family: ${fonts.robotoMedium};
  color: ${colors.light.gray600};
`;
