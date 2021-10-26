import styled from 'styled-components/native';
import { MaterialCommunityIcons as IconVI } from '@expo/vector-icons';

import Constants from 'expo-constants';
import { sizes } from '../../../../../../utils/predefinedSizes';
import normalize from '../../../../../../utils/normalizeSize';
import fonts from '../../../../../../styles/fonts';
import colors from '../../../../../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight + sizes.height.dp4}px
    ${sizes.width.dp30}px ${sizes.height.dp16}px ${sizes.width.dp30}px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
`;

export const IconContainer = styled.View`
  align-items: center;
  align-self: center;
  padding: ${sizes.width.dp24}px;
  border-radius: ${normalize(16)}px;
  background-color: rgba(220, 248, 250, 0.4);
`;

export const Icon = styled(IconVI)`
  font-size: ${normalize(56)}px;
  color: ${colors.light.primary700};
`;

export const Title = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${normalize(28)}px;
  color: ${colors.light.gray600};
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: ${sizes.height.dp16}px;

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(18)}px;
  line-height: ${normalize(26)}px;
  color: ${colors.light.gray500};
  text-align: center;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${sizes.height.dp20}px;
`;

export const Footer = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.light.gray400};
  font-size: ${normalize(16)}px;
  margin: ${sizes.height.dp12}px 0 0 0;
  line-height: ${normalize(26)}px;
  text-align: center;
`;
