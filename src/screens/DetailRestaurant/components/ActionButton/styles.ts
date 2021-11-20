import styled, { css } from 'styled-components/native';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';
import pixelToDP from '../../../../utils/pixelToDP';

interface ContainerProps {
  bgc: string;
  borderColor: string;
}

export const ContainerBox = styled.View<ContainerProps>`
  ${props =>
    props.bgc &&
    css`
      background-color: ${props.bgc};
      border-width: 1px;
      border-color: ${props.borderColor};
    `}

  width: ${pixelToDP.width(80)}px;
  height: ${pixelToDP.height(80)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${normalize(16)}px;
`;

export const Text = styled.Text`
  font-size: ${normalize(12)}px;
  font-family: ${fonts.robotoMedium};
  color: #fff;
`;
