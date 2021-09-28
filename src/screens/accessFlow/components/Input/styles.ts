import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';
import pixelToDP from '../../../../utils/pixelToDP';
import { sizes } from '../../../../utils/predefinedSizes';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  margin-bottom: ${sizes.height.dp4}px;

  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray400};
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: ${pixelToDP.height(52)}px;
  padding-left: ${sizes.width.dp20}px;

  font-size: ${normalize(16)}px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};

  border: 1px solid ${colors.light.gray400};
  border-radius: ${normalize(8)}px;
`;
