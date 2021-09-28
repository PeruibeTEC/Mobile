import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import pixelToDP from '../../utils/pixelToDP';
import normalize from '../../utils/normalizeSize';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(8)}px;
  flex-direction: row;
  width: 100%;
  height: ${pixelToDP.height(52)}px;
  background-color: ${colors.light.primary700};
`;

export const Text = styled.Text`
  font-family: ${fonts.robotoMedium};
  color: ${colors.light.primary50};
  font-size: ${normalize(18)}px;
`;
