import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import pixelToDP from '../../../utils/pixelToDP';
import { sizes } from '../../../utils/predefinedSizes';
import normalize from '../../../utils/normalizeSize';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

import mapSvg from '../../../assets/mapSvg.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight + sizes.height.dp8}px
    ${sizes.width.dp30}px ${sizes.height.dp16}px ${sizes.width.dp30}px;
`;

export const MapSvg = styled(mapSvg)`
  width: ${pixelToDP.width(280)}px;
  height: ${pixelToDP.height(254)}px;
`;

export const TextGroup = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${normalize(32)}px;
  font-family: ${fonts.robotoBold};
  text-align: center;
  color: ${colors.light.gray900};
`;

export const Description = styled.Text`
  margin-top: ${sizes.height.dp12}px;
  font-size: ${normalize(18)}px;
  font-family: ${fonts.robotoMedium};
  line-height: ${normalize(24)}px;
  text-align: center;
  color: ${colors.light.gray700};
`;

export const ButtonGroup = styled.View`
  width: 100%;
`;
