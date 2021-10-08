import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import { sizes } from '../../../../utils/predefinedSizes';
import pixelToDP from '../../../../utils/pixelToDP';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';

export const Container = styled.View`
  padding: ${pixelToDP.height(28)}px 0 ${sizes.height.dp20}px
    ${sizes.width.dp20}px;
  border-color: ${colors.light.gray50};
  border-bottom-width: 1px;
`;

export const SessionHeader = styled.View`
  padding-right: ${sizes.width.dp24}px;
  margin-bottom: ${sizes.height.dp16}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SessionName = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${normalize(18)}px;
  color: ${colors.light.gray800};
`;

export const SeeAllItems = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray400};
`;
