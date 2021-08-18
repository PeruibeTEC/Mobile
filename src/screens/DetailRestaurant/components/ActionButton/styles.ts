import styled, { css } from 'styled-components/native';

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

  align-items: center;
  justify-content: center;
  width: 80px;
  height: 70px;
  border-radius: 16px;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-family: 'Roboto_500Medium';
  color: #fff;
`;
