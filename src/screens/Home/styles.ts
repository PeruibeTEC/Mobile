import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Feed = styled.ScrollView`
  background-color: ${colors.light.background};
`;
