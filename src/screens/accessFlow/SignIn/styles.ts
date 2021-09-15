import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { sizes } from '../../../utils/predefinedSizes';
import percentageToDP from '../../../utils/percentageToDP';
import normalize from '../../../utils/normalizeFont';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight + sizes.height.dp8}px
    ${sizes.width.dp30}px ${sizes.height.dp40}px ${sizes.width.dp30}px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  margin-bottom: ${sizes.height.dp8}px;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.View`
  width: 100%;
  margin: ${sizes.height.dp24}px 0 ${sizes.height.dp24}px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: ${percentageToDP.width('20%')}px;
  height: 1px;
  margin: 0 ${sizes.height.dp8}px 0 ${sizes.height.dp8}px;
  background-color: ${colors.light.gray400};
`;

export const DividerText = styled.Text`
  font-size: 12px;
  font-family: ${fonts.robotoRegular};
  text-transform: uppercase;
  color: ${colors.light.gray400};
`;

export const InputGroup = styled.View`
  width: 100%;
  justify-content: space-between;
`;

export const ForgotPassword = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: 14px;
  color: ${colors.light.gray500};
  text-decoration-line: underline;
  margin: ${sizes.height.dp16}px 0 0 auto;
`;

export const ButtonGroup = styled.View`
  width: 100%;
  margin-top: ${sizes.height.dp8}px;
  justify-content: space-between;
`;

export const CreateNewAccount = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.light.gray400};
  font-size: 16px;
  margin: ${sizes.height.dp24}px 0 0 0;
`;

export const NewAccount = styled.Text`
  color: ${colors.light.gray500};
  font-size: 16px;
  text-decoration-line: underline;
  margin: ${sizes.height.dp4}px 0 0 0;
`;
