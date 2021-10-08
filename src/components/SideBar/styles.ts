import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { DrawerContent } from '@react-navigation/drawer';
import pixelToDP from '../../utils/pixelToDP';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import normalize from '../../utils/normalizeSize';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
  background-color: ${colors.light.background};
`;

export const Cover = styled.ImageBackground`
  width: 100%;
  padding: ${sizes.height.dp40}px 0 ${sizes.height.dp24}px ${sizes.width.dp16}px;
  background-color: #121212;
`;

export const ProfileImage = styled.Image`
  width: ${pixelToDP.width(80)}px;
  height: ${pixelToDP.height(80)}px;

  border-radius: ${normalize(500)}px;
  border-width: ${normalize(3)}px;
  border-color: ${colors.light.gray100};
`;

export const Name = styled.Text`
  margin-top: ${sizes.height.dp8}px;
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(20)}px;
  color: ${colors.light.gray50};
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${sizes.height.dp4}px;
`;

export const TypeUser = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray400};
`;

export const Dot = styled.View`
  width: ${sizes.width.dp4}px;
  height: ${sizes.height.dp4}px;
  border-radius: ${normalize(100)}px;
  background-color: ${colors.light.gray800};

  margin: 0 ${sizes.width.dp8}px 0 ${sizes.width.dp8}px;
`;

export const City = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray400};
`;

export const Options = styled.View`
  flex: 1;
  width: 100%;
`;

export const Content = styled(DrawerContent)`
  margin-top: -${sizes.height.dp20}px;
`;

export const LogoutContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: ${sizes.height.dp4}px;
  background-color: hotpink;
`;
