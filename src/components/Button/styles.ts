import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
  width: 100%;
  height: 52px;
  background-color: ${colors.light.primary700};
`;

export const ButtonText = styled(RectButton)`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: ${fonts.robotoMedium};
  color: ${colors.light.primary50};
  font-size: 18px;
`;
