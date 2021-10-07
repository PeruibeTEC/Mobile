import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import pixelToDP from '../../utils/pixelToDP';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Content = styled.ScrollView`
  background-color: ${colors.light.background};
`;

export const Name = styled.Text`
  margin-top: ${pixelToDP.height(56)}px;
  color: ${colors.light.gray800};

  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(24)}px;

  align-self: center;
`;

export const Biography = styled.Text`
  margin-top: ${sizes.height.dp8}px;
  color: ${colors.light.gray500};

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  line-height: ${normalize(18)}px;
  text-align: center;

  padding: 0 ${pixelToDP.width(30)}px;
  align-self: center;
`;
