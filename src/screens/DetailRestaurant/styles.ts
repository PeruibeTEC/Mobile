import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';
import pixelToDP from '../../utils/pixelToDP';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Scroll = styled.ScrollView`
  background-color: ${colors.light.background};
  width: 100%;
`;

export const ContainerCover = styled.View`
  background-color: black;
  width: 100%;
  height: ${pixelToDP.height(255)}px;
`;

export const BackgroundPhoto = styled.ImageBackground`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const RestaurantPhoto = styled.Image`
  width: ${pixelToDP.width(140)}px;
  height: ${pixelToDP.height(140)}px;

  border: ${normalize(4)}px solid ${colors.light.gray100};
  border-radius: ${normalize(500)}px;

  opacity: 1;
`;

export const RestaurantName = styled.Text`
  margin-top: ${sizes.height.dp8}px;

  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(24)}px;
  color: ${colors.light.gray50};
`;

export const RestaurantLocation = styled.Text`
  margin-top: ${sizes.height.dp8}px;

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray200};
`;

export const Content = styled.View`
  align-items: center;
  padding: ${sizes.height.dp24}px ${sizes.width.dp20}px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin: ${sizes.height.dp24}px 0;

  background-color: ${colors.light.gray100};
`;

export const Description = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(16)}px;
  line-height: ${normalize(22)}px;

  color: ${colors.light.gray700};
`;

export const ActionButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
