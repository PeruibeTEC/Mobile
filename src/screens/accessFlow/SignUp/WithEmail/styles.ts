import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { sizes } from '../../../../utils/predefinedSizes';
import normalize from '../../../../utils/normalizeSize';
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

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

export const Title = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${normalize(28)}px;
  color: ${colors.light.gray600};

  text-align: center;
  margin-bottom: ${sizes.height.dp40}px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Login = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.light.gray400};
  font-size: ${normalize(16)}px;
  margin: ${sizes.height.dp12}px 0 0 0;
`;

export const LoginLink = styled.Text`
  color: ${colors.light.gray500};
  font-size: ${normalize(16)}px;
  text-decoration-line: underline;
  margin: ${sizes.height.dp4}px 0 0 0;
`;
