import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Header = styled.View`
  padding: 16px 30px 40px 30px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Divider = styled.View`
  width: 100%;
  margin: 24px 0 24px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: 56px;
  height: 1px;
  margin: 0 16px 0 16px;
  background-color: ${colors.light.gray400};
`;

export const DividerText = styled.Text`
  font-size: 12px;
  font-family: ${fonts.robotoRegular};
  text-transform: uppercase;
  color: ${colors.light.gray400};
`;
