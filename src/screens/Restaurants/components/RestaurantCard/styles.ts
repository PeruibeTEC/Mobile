import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import { sizes } from '../../../../utils/predefinedSizes';
import pixelToDP from '../../../../utils/pixelToDP';
import normalize from '../../../../utils/normalizeSize';

export const Container = styled.TouchableOpacity`
  width: ${pixelToDP.width(160)}px;
  height: ${pixelToDP.height(200)}px;
  background-color: ${colors.light.gray50};
  border: 1px solid ${colors.light.gray100};
  border-radius: ${normalize(8)}px;
  margin-right: ${sizes.width.dp12}px;
`;

export const RestaurantImage = styled.Image`
  width: 100%;
  height: ${pixelToDP.height(150)}px;
  border-top-left-radius: ${normalize(8)}px;
  border-top-right-radius: ${normalize(8)}px;
`;

export const RestaurantName = styled.Text`
  padding: 0 ${sizes.width.dp8}px;
  font-family: 'Roboto_700Bold';
  font-size: ${normalize(16)}px;
  color: ${colors.light.gray700};
`;
