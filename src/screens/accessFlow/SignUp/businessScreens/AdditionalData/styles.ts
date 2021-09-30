import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../../../../styles/colors';
import fonts from '../../../../../styles/fonts';
import normalize from '../../../../../utils/normalizeSize';
import { sizes } from '../../../../../utils/predefinedSizes';
import pixelToDP from '../../../../../utils/pixelToDP';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight + sizes.height.dp4}px
    ${sizes.width.dp30}px ${sizes.height.dp16}px ${sizes.width.dp30}px;

  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const Description = styled.Text`
  width: 100%;

  margin-bottom: ${sizes.height.dp24}px;

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(18)}px;
  line-height: ${normalize(24)}px;
  text-align: center;
  color: ${colors.light.gray700};
`;

export const ContainerPicker = styled.View`
  width: 100%;
`;

export const Caption = styled.Text`
  margin-bottom: ${sizes.height.dp4}px;

  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray400};
`;

export const PickerStyle = styled.View`
  width: 100%;
  height: ${pixelToDP.height(52)}px;
  padding-left: ${sizes.width.dp20}px;

  font-size: ${normalize(16)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};

  border: 1px solid ${colors.light.gray400};
  border-radius: ${normalize(8)}px;
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
