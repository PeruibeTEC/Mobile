import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import pixelToDP from '../../../../utils/pixelToDP';
import normalize from '../../../../utils/normalizeSize';
import { sizes } from '../../../../utils/predefinedSizes';

export const Container = styled.View`
  width: 100%;
  height: ${pixelToDP.height(52)}px;

  background-color: ${colors.light.background};
  border: 1px solid ${colors.light.gray300};
  border-radius: ${normalize(8)}px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  margin-left: ${sizes.width.dp12}px;

  font-size: ${normalize(18)}px;
  font-family: ${fonts.robotoMedium};
  color: ${colors.light.gray600};
`;
