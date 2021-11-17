import styled from 'styled-components/native';
import { TextInput } from 'react-native';

import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';
import pixelToDP from '../../../../utils/pixelToDP';
import { sizes } from '../../../../utils/predefinedSizes';

interface IErrorInput {
  error?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text<IErrorInput>`
  margin-bottom: ${sizes.height.dp4}px;

  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  color: ${props => (props.error ? colors.light.red300 : colors.light.gray400)};
`;

export const InputText = styled(TextInput)<IErrorInput>`
  width: 100%;
  height: ${pixelToDP.height(52)}px;
  padding-left: ${sizes.width.dp20}px;

  font-size: ${normalize(16)}px;
  font-family: ${fonts.robotoRegular};
  color: ${props => (props.error ? colors.light.red300 : colors.light.gray500)};

  border: 1px solid
    ${props => (props.error ? colors.light.red300 : colors.light.gray400)};
  border-radius: ${normalize(8)}px;
`;
