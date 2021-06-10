import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const Name = styled.Text`
  margin-top: 72px;
  color: #404b5a;

  font-family: 'Inter_600SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  align-self: center;
`;

export const Biography = styled.Text`
  margin-top: 8px;
  color: #6d7989;

  font-family: 'Inter_600SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;

  padding: 0 30px;
  align-self: center;
`;
