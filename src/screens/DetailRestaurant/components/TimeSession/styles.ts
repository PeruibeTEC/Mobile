import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';

interface TimeSessionProps {
  isOpen: boolean;
}

export const ContainerSession = styled.View`
  margin-top: 21px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ClockIcon = styled(Feather)<TimeSessionProps>`
  font-size: 34px;
  color: #e8265e;

  ${props =>
    props.isOpen &&
    css`
      color: #42a5f5;
    `}
`;

export const TimeInfo = styled.View`
  left: 8px;
`;

export const IsOpenNow = styled.Text<TimeSessionProps>`
  color: #e8265e;
  font-size: 18px;
  font-family: 'Roboto_400Regular';

  ${props =>
    props.isOpen &&
    css`
      color: #42a5f5;
    `}
`;

export const OpenHours = styled.Text<TimeSessionProps>`
  color: #e87999;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  text-decoration: underline;

  ${props =>
    props.isOpen &&
    css`
      color: #64b5f6;
    `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 38px;
  margin-left: 22px;
  background-color: #e8e8e8;
`;

export const Events = styled.Text`
  color: #878787;
  font-size: 18px;
  margin-left: 32px;
  font-family: 'Roboto_400Regular';
  text-decoration: underline;
`;
