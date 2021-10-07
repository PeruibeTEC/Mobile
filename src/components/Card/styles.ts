import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import normalize from '../../utils/normalizeSize';
import pixelToDP from '../../utils/pixelToDP';
import { sizes } from '../../utils/predefinedSizes';

export const Container = styled.View`
  width: 100%;
  max-width: 100%;
  margin-top: ${sizes.height.dp20}px;
  padding: ${sizes.height.dp8}px ${sizes.width.dp8}px;

  flex-direction: row;
  align-items: center;

  background-color: ${colors.light.white};
  border: 1px ${colors.light.gray100};
  border-radius: ${normalize(8)}px;
`;

export const Photo = styled.Image`
  width: 30%;
  height: ${pixelToDP.height(88)}px;
  border-radius: ${normalize(8)}px;
`;

export const ContentContainer = styled.View`
  width: 55%;
  margin-left: ${sizes.width.dp16}px;
`;

export const Name = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${normalize(16)}px;
  line-height: ${normalize(18)}px;
  color: ${colors.light.gray800};
`;

export const Budget = styled.Text`
  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoMedium};
  color: ${colors.light.gray500};
  margin-top: ${sizes.height.dp8}px;
`;

export const Go = styled.TouchableOpacity`
  width: 15%;
`;
