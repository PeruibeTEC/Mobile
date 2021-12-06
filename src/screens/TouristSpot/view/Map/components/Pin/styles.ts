import styled from 'styled-components/native';
import pixelToDP from '../../../../../../utils/pixelToDP';
import normalize from '../../../../../../utils/normalizeSize';
import colors from '../../../../../../styles/colors';

export const Container = styled.View``;

export const Image = styled.Image`
  width: ${pixelToDP.width(56)}px;
  height: ${pixelToDP.height(56)}px;

  border-radius: ${normalize(8)}px;
  border-width: 1px;
  border-color: ${colors.light.primary900};
`;

export const Triangle = styled.View`
  width: ${pixelToDP.width(16)}px;
  height: ${pixelToDP.height(16)}px;

  background-color: ${colors.light.primary900};
`;
