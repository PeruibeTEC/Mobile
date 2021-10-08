import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import pixelToDP from '../../utils/pixelToDP';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Feed = styled.ScrollView`
  background-color: ${colors.light.background};
`;

export const Fab = styled.TouchableOpacity`
  position: absolute;
  right: ${sizes.width.dp24}px;
  bottom: ${sizes.height.dp24}px;

  width: ${pixelToDP.width(56)}px;
  height: ${pixelToDP.height(56)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${pixelToDP.width(500)}px;

  background-color: ${colors.light.primary700};
`;
