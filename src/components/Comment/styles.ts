import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { sizes } from '../../utils/predefinedSizes';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';

export const Container = styled.View`
  width: 100%;
  padding: ${sizes.height.dp20}px ${sizes.width.dp20}px;

  flex-direction: row;
  flex-wrap: wrap;

  border-color: ${colors.light.gray100};
  border-bottom-width: 1px;
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  width: ${sizes.width.dp40}px;
  height: ${sizes.height.dp40}px;

  border-radius: ${normalize(500)}px;
  border-width: 1px;
  border-color: ${colors.light.gray400};
`;

export const Infos = styled.View`
  margin-left: ${sizes.width.dp8}px;
`;

export const Name = styled.Text`
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(16)}px;
  color: ${colors.light.gray700};
`;

export const TimeToComment = styled.Text`
  margin-top: ${sizes.height.dp4}px;
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray400};
`;

export const Caption = styled.Text`
  margin-top: ${sizes.height.dp8}px;

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(16)}px;
  line-height: ${normalize(22)}px;
  color: ${colors.light.gray600};
`;

export const IconsContainer = styled.View`
  width: 100%;
  margin-top: ${sizes.height.dp16}px;
  flex-direction: row;
  align-items: center;
`;
