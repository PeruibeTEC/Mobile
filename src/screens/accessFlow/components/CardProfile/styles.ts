import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  height: 72px;
  background-color: #f8f8f8;
  border-radius: 8px;
  border-width: 1px;
  border-color: #96a3a3;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  flex-direction: row;
`;

export const View = styled.View`
  padding: 16px 0 16px 20px;
`;

export const Name = styled.Text`
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};
  font-size: 20px;
  padding-left: 24px;
  padding-top: 20px;
`;
