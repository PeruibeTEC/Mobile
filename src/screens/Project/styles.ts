import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight}px 0 0 0;
`;

export const Content = styled.ScrollView`
  background-color: ${colors.light.background};
`;

export const Photo = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').height * 0.32}px;
`;

export const Infos = styled.View`
  padding: ${sizes.height.dp20}px ${sizes.width.dp20}px;
  border-color: #efefef;
  border-bottom-width: ${sizes.height.dp4}px;
`;

export const WorkName = styled.Text`
  color: ${colors.light.gray900};

  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(24)}px;
`;

export const SimpleInformation = styled.Text`
  margin-top: ${sizes.height.dp4}px;
  color: ${colors.light.gray500};

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(16)}px;
`;

export const Description = styled.Text`
  margin-top: ${sizes.height.dp12}px;
  color: ${colors.light.gray700};

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(16)}px;
  line-height: ${normalize(22)}px;
`;

export const TitleToComments = styled.Text`
  padding: ${sizes.height.dp8}px ${sizes.width.dp20}px;
  color: ${colors.light.gray600};

  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(16)}px;

  border-color: #efefef;
  border-bottom-width: ${sizes.height.dp4}px;
`;

export const InputContainer = styled.View`
  padding: ${sizes.height.dp16}px ${sizes.width.dp20}px;
  border-color: #efefef;
  border-bottom-width: ${sizes.height.dp4}px;
`;

export const InputText = styled.Text`
  color: ${colors.light.gray600};

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
`;

export const Box = styled.View`
  margin-top: ${sizes.height.dp8}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  padding: ${sizes.height.dp8}px ${sizes.width.dp8}px;
  height: ${sizes.height.dp40}px;
  flex: 1;

  border: 1px solid ${colors.light.gray300};
  border-radius: ${normalize(8)}px;

  color: ${colors.light.gray400};
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(16)}px;
`;

export const Send = styled.TouchableOpacity`
  margin-left: ${sizes.width.dp8}px;
`;
