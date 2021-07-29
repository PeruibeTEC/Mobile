import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 16px;
  padding-left: 22px;
  font-family: 'Roboto_700Bold';
  border-color: #e0e5eb;
  border-bottom-width: 1px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProfilePhoto = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 25px;
  border-width: 1px;
  border-color: #d5dce5;
`;

export const ContentContainer = styled.View`
  width: 90%;
  font-family: 'Roboto_700Bold';
  color: #202833;
  font-size: 16px;
  padding-left: 10px;
  padding-bottom: 3px;
`;

export const Name = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #202833;
  font-size: 15px;
  line-height: 14px;
`;

export const IconsContainer = styled.View`
  width: 50%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 42px;
  margin-bottom: 14px;
`;

export const Caption = styled.Text`
  width: 95%;
  font-family: 'Roboto_400Regular';
  color: #404b5a;
  font-size: 15px;
  margin-top: 5px;
  line-height: 21px;
  margin-bottom: 4px;
`;

export const TimeToComment = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #929fb1;
  font-size: 14px;
  margin-right: 12px;
`;
