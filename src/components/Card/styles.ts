import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 15px;
  margin-top: 20px;
  background-color: rgba(245, 245, 245, 0.65);
  border: 2px #ebeff3;
  border-radius: 12px;
`;

export const Photo = styled.Image`
  flex-direction: row;
  width: 90px;
  height: 80px;
  margin-left: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-family: Roboto_700Bold;
  line-height: 16px;
  margin-top: 24px;
`;

export const Budget = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-fa
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  width: 50%;
`;
