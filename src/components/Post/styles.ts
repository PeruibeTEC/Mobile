import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #ffff;
  margin-top: 16px;
  font-family: 'Roboto_700Bold';
  color: #202833;
  border-color: #e0e5eb;
  border-bottom-width: 1px;
  font-size: 16px;

  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProfilePhoto = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 5%;
  border-width: 1px;
  border-color: #d5dce5;
`;

export const HeadContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentContainer = styled.View`
  width: 80%;
  font-family: 'Roboto_700Bold';
  color: #202833;
  font-size: 16px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Name = styled.Text`
  font-family: 'Roboto_500Medium';
  color: #516270;
  font-size: 14px;
`;

export const TimeToPost = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #bccbd6;
  font-size: 14px;
`;

export const Caption = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #27333d;
  font-size: 15px;
  margin-top: 8px;
`;

export const Column = styled.View`
  margin-top: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostPhoto = styled.Image`
  height: 244px;
  width: 100%;
  margin-top: 13px;
`;

export const IconsContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 16px;
`;
