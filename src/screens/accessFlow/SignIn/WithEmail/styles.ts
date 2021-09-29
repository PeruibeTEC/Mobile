import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { sizes } from '../../../../utils/predefinedSizes';

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
