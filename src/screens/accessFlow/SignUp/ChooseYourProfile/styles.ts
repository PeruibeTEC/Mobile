import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';
import { sizes } from '../../../../utils/predefinedSizes';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight + sizes.height.dp4}px
    ${sizes.width.dp30}px ${sizes.height.dp16}px ${sizes.width.dp30}px;

  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
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

export const Card = styled.View`
  width: 100%;
  margin-top: ${sizes.height.dp16}px;
  padding: ${sizes.height.dp16}px ${sizes.width.dp24}px;

  flex-direction: row;
  align-items: center;

  border: 1px solid ${colors.light.gray400};
  border-radius: ${normalize(8)}px;
`;

export const CardIcon = styled(Icon)`
  font-size: ${normalize(32)}px;
  color: ${colors.light.gray500};
  margin-right: ${sizes.width.dp24}px;
`;

export const LabelCard = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(20)}px;
  line-height: ${normalize(24)}px;
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
