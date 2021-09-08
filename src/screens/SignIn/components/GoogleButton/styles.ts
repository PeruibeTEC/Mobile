import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  height: 52px;

  background-color: ${colors.light.background};
  border: 1px solid ${colors.light.gray300};
  border-radius: 8px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  margin-left: 12px;

  font-size: 18px;
  font-family: ${fonts.robotoMedium};
  color: ${colors.light.gray600};
`;
