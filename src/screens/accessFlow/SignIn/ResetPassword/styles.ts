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
`;

export const Content = styled.View`
  width: 100%;
  margin-top: ${sizes.height.dp40 + sizes.height.dp20}px;
`;

export const Title = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${normalize(28)}px;
  color: ${colors.light.gray600};
`;

export const Description = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(18)}px;
  line-height: ${normalize(22)}px;
  color: ${colors.light.gray500};

  margin: ${sizes.height.dp16}px 0 ${sizes.height.dp40}px 0;
`;

export const Form = styled.View`
  width: 100%;
`;
