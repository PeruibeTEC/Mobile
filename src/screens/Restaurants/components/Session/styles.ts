import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px 0 24px 24px;
  border-color: #f6f6f6;
  border-bottom-width: 1px;
`;

export const SessionHeader = styled.View`
  padding-right: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SessionName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #6d7989;
`;

export const SeeAllItems = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 14px;
  color: #929fb1;
`;
