import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  margin-bottom: 4px;

  font-size: 14px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray400};
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: 52px;
  padding-left: 20px;

  font-size: 16px;
  font-family: ${fonts.robotoRegular};
  color: ${colors.light.gray500};

  border: 1px solid ${colors.light.gray400};
  border-radius: 8px;
`;
