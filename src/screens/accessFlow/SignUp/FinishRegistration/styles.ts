import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';
import { sizes } from '../../../../utils/predefinedSizes';
import pixelToDP from '../../../../utils/pixelToDP';

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

export const Upload = styled.TouchableOpacity`
  width: ${pixelToDP.width(150)}px;
  height: ${pixelToDP.height(150)}px;

  align-items: center;
  justify-content: center;

  background-color: #e8eded;
  border: 1px solid ${colors.light.gray200};
  border-radius: ${normalize(100)}px;
`;

export const UploadIcon = styled(Icon)`
  font-size: ${normalize(64)}px;
  color: ${colors.light.gray200};
`;

export const TextArea = styled.TextInput`
  width: 100%;
  max-height: ${pixelToDP.height(102)}px;
  margin-top: ${sizes.height.dp40}px;
  padding: 0 ${sizes.width.dp16}px;

  border: 1px solid ${colors.light.gray300};
  border-radius: ${normalize(8)}px;

  font-size: ${normalize(16)}px;
  color: ${colors.light.gray500};
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
