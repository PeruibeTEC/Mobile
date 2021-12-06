import styled from 'styled-components/native';
import { sizes } from '../../../../utils/predefinedSizes';
import normalize from '../../../../utils/normalizeSize';
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';
import pixelToDP from '../../../../utils/pixelToDP';

export const Container = styled.ScrollView`
  width: 100%;
  padding: 0 ${sizes.width.dp20}px;
  margin-bottom: ${pixelToDP.height(80)}px;
  background-color: ${colors.light.background};
`;

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  margin-top: ${sizes.height.dp24}px;

  border-radius: ${normalize(8)}px;
  border: 1px solid ${colors.light.gray200};
`;

export const PointImage = styled.Image`
  width: 100%;
  height: ${pixelToDP.height(208)}px;
  border-top-left-radius: ${normalize(8)}px;
  border-top-right-radius: ${normalize(8)}px;
`;

export const Infos = styled.View`
  width: 100%;
  padding: ${sizes.height.dp16}px ${sizes.width.dp16}px;
`;

export const PointName = styled.Text`
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(24)}px;
  color: ${colors.light.gray700};
`;

export const RatingInfos = styled.View`
  margin-top: ${sizes.height.dp8}px;
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Dot = styled.View`
  width: ${sizes.width.dp4}px;
  height: ${sizes.height.dp4}px;
  border-radius: ${normalize(100)}px;
  background-color: ${colors.light.yellow100};

  margin: 0 ${sizes.width.dp4}px;
`;

export const RatingText = styled.Text`
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(20)}px;
  color: ${colors.light.yellow300};
`;

export const LinkToEvaluations = styled.Text`
  margin-top: ${sizes.height.dp8}px;

  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  color: ${colors.light.gray400};
  text-decoration: underline;
`;
