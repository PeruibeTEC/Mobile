import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import colors from '../../../../styles/colors';
import { sizes } from '../../../../utils/predefinedSizes';
import fonts from '../../../../styles/fonts';
import normalize from '../../../../utils/normalizeSize';

interface TimeSessionProps {
  isOpen: boolean;
}

export const ContainerSession = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Infos = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ClockIcon = styled(Feather)<TimeSessionProps>`
  font-size: ${normalize(34)}px;
  color: #e8265e;

  ${props =>
    props.isOpen &&
    css`
      color: #42a5f5;
    `}
`;

export const TimeInfo = styled.View`
  margin-left: ${sizes.height.dp8}px;
`;

export const IsOpenNow = styled.Text<TimeSessionProps>`
  font-size: ${normalize(18)}px;
  font-family: ${fonts.robotoRegular};
  color: #e8265e;

  ${props =>
    props.isOpen &&
    css`
      color: #42a5f5;
    `}
`;

export const OpenHours = styled.Text<TimeSessionProps>`
  font-size: ${normalize(14)}px;
  font-family: ${fonts.robotoRegular};
  text-decoration: underline;
  color: #e87999;

  ${props =>
    props.isOpen &&
    css`
      color: #64b5f6;
    `}
`;

export const Divider = styled.View`
  width: 1px;
  height: ${sizes.height.dp40}px;
  margin: ${sizes.height.dp8}px ${sizes.width.dp16}px;
  background-color: ${colors.light.gray200};
`;

export const Events = styled.Text`
  padding: ${sizes.height.dp8}px;

  font-size: ${normalize(18)}px;
  font-family: ${fonts.robotoRegular};
  text-decoration: underline;

  color: ${colors.light.gray500};
`;
