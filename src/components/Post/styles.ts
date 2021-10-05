import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';
import pixelToDP from '../../utils/pixelToDP';
import { sizes } from '../../utils/predefinedSizes';

interface ILikeText {
  isLiked: boolean;
}

export const Container = styled.View`
  width: 100%;
  padding-top: ${sizes.height.dp16}px;

  flex-direction: row;
  flex-wrap: wrap;

  border-color: ${colors.light.gray100};
  border-top-width: 1px;
  background-color: ${colors.light.white};
`;

export const HeadContainer = styled.View`
  width: 100%;
  padding: 0 ${sizes.width.dp20}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  height: ${pixelToDP.height(40)}px;
  width: ${pixelToDP.width(40)}px;

  border-radius: ${normalize(100)}px;
  border-width: 1px;
  border-color: ${colors.light.gray200};
`;

export const Name = styled.Text`
  margin: 0 ${sizes.width.dp8}px;

  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray700};
`;

export const Dot = styled.View`
  width: ${sizes.width.dp4}px;
  height: ${sizes.height.dp4}px;
  border-radius: ${normalize(100)}px;
  background-color: ${colors.light.gray200};
`;

export const TimeToPost = styled.Text`
  margin-left: ${sizes.width.dp8}px;

  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray200};
`;

export const MenuToggleContainer = styled.TouchableOpacity`
  padding: ${normalize(4)}px;
  border-radius: ${normalize(100)}px;
`;

export const CaptionContainer = styled.View`
  width: 100%;
  padding: ${sizes.height.dp8}px ${sizes.width.dp20}px;
`;

export const Caption = styled.Text`
  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  line-height: ${normalize(20)}px;
  color: ${colors.light.gray700};
`;

export const PostPhoto = styled.Image`
  width: 100%;
  height: ${pixelToDP.height(244)}px;
  margin-top: ${sizes.height.dp8}px;
`;

export const PostActionsContainer = styled.View`
  width: 100%;
  padding: ${sizes.height.dp16}px ${sizes.width.dp20}px 0 ${sizes.width.dp20}px;
`;

export const PostActions = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${sizes.height.dp16}px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LikeText = styled.Text<ILikeText>`
  margin-left: ${sizes.width.dp4}px;

  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  color: ${props =>
    props.isLiked ? colors.light.red300 : colors.light.gray500};
`;

export const ActionText = styled.Text`
  margin-left: ${sizes.width.dp4}px;

  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};
`;
