import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { sizes } from '../../utils/predefinedSizes';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const List = styled.FlatList`
  padding: 0 ${sizes.width.dp20}px;
`;
