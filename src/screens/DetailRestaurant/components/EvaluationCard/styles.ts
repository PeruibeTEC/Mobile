import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import { sizes } from '../../../../utils/predefinedSizes';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';
import pixelToDP from '../../../../utils/pixelToDP';

export const ContainerCard = styled.View`
  width: 100%;
  padding: ${sizes.height.dp16}px;

  background-color: #2196f3;
  border-radius: ${normalize(8)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxRating = styled.View`
  padding: ${normalize(8)}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: #2ea3f7;
  border: ${colors.light.primary50} 1px;
  border-radius: ${normalize(8)}px;
`;

export const Rating = styled.Text`
  margin-right: ${sizes.width.dp4}px;

  font-family: ${fonts.robotoBold};
  font-size: ${normalize(28)}px;
  color: #ffff;
`;

export const EvaluationContainer = styled.View`
  flex: 1;
  height: 100%;
  margin-left: ${sizes.width.dp12}px;
`;

export const RatingText = styled.Text`
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(18)}px;
  color: ${colors.light.primary50};
`;

export const LinkToEvaluations = styled.Text`
  font-family: ${fonts.robotoRegular};
  font-size: ${normalize(14)}px;
  color: #a5d4ef;
  text-decoration: underline;
  margin-top: ${sizes.height.dp4}px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin: ${sizes.height.dp16}px 0;
  background-color: #f0f0f0;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EvaluationNow = styled.Text`
  font-family: ${fonts.robotoMedium};
  font-size: ${normalize(16)}px;
  color: #d4f5ff;
`;
