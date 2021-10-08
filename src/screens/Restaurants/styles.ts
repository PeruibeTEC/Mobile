import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import pixelToDP from '../../utils/pixelToDP';
import normalize from '../../utils/normalizeSize';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Feed = styled.ScrollView`
  background-color: ${colors.light.background};
`;

export const RestaurantCover = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FeaturedRestaurant = styled.Image`
  width: ${pixelToDP.width(140)}px;
  height: ${pixelToDP.height(140)}px;
  margin: ${sizes.height.dp24}px 0 ${sizes.height.dp16}px 0;

  border-radius: ${normalize(500)}px;
`;

export const RestaurantName = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${normalize(24)}px;
  color: ${colors.light.gray50};
  text-shadow: 1px 1px 2px ${colors.light.gray800};
`;

export const RestaurantAddress = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${normalize(12)}px;
  color: ${colors.light.gray50};
  text-shadow: 0.8px 0.8px 1px ${colors.light.gray800};
  margin-top: ${sizes.height.dp8}px;
`;

export const ViewButtonContainer = styled(RectButton)`
  background-color: ${colors.light.primary500};
  padding: ${sizes.height.dp8}px ${sizes.width.dp32}px;
  margin: ${sizes.height.dp16}px 0;
  border-radius: ${normalize(500)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewButtonText = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(16)}px;
  color: ${colors.light.primary50};
  margin-right: ${sizes.width.dp4}px;
`;

export const RestaurantSessions = styled.View`
  flex: 1;
`;
