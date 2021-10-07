import styled from 'styled-components/native';
import colors from '../../styles/colors';
import normalize from '../../utils/normalizeSize';
import pixelToDP from '../../utils/pixelToDP';
import { sizes } from '../../utils/predefinedSizes';

export const ContainerPicker = styled.View`
  width: 100%;
  padding: 0 ${sizes.width.dp20}px;
  margin: ${sizes.height.dp16}px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PickerStyle = styled.View`
  width: 100%;
  height: ${pixelToDP.height(52)}px;

  border-radius: ${normalize(8)}px;
  background-color: ${colors.light.background};
  border: 1px solid ${colors.light.gray100};
`;
