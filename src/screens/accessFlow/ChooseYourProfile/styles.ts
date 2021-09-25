import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight + 8}px 30px 40px 30px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 315px;
  font-family: ${fonts.robotoRegular};
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${colors.light.gray700};
`;

export const ButtonGroup = styled.View`
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const HasRegister = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.light.gray400};
  font-size: 16px;
  margin: 24px 0 0 0;
`;

export const DoLoggin = styled.Text`
  color: ${colors.light.gray500};
  font-size: 16px;
  text-decoration-line: underline;
  margin: 4px 0 0 0;
`;
