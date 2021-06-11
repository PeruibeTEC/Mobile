import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/FontAwesome5';

export const Container = styled.View`
  width: 100%;
  background: #ffff;
  margin-top: 12px;
  padding-left: 16px;
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

export const ContentContainer = styled.View`
  width: 80%;
  font-family: 'Roboto_700Bold';
  color: #202833;
  font-size: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-right: 20px;
  padding-bottom: 13px;
`;

export const Name = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #202833;
  font-size: 16px;
`;

export const TimeToPost = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #929fb1;
  font-size: 15px;
`;

export const Caption = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #404b5a;
  font-size: 15px;
  margin-top: 5px;
`;

export const Column = styled.View`
  margin-top: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostPhoto = styled.Image`
  height: 131px;
  width: 100%;
  border-radius: 7px;
  margin-top: 13px;
`;

export const IconsContainer = styled.View`
  width: 100%;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 33px;
  padding-left: 30px;
`;
