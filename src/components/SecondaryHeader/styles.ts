import styled from 'styled-components/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import colors from '../../styles/colors';
import pixelToDP from '../../utils/pixelToDP';
import normalize from '../../utils/normalizeSize';
import { sizes } from '../../utils/predefinedSizes';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  height: ${pixelToDP.height(56)}px;
  padding: 0 ${sizes.width.dp20}px;

  flex-direction: row;
  align-items: center;

  border-color: ${colors.light.gray100};
  border-bottom-width: 1px;
  background-color: ${colors.light.background};
`;

export const MenuIcon = styled(Icon)`
  font-size: ${normalize(32)}px;
  color: ${colors.light.gray500};
`;

export const Title = styled.Text`
  color: ${colors.light.gray500};
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(20)}px;

  margin-left: ${sizes.width.dp24}px;
`;
