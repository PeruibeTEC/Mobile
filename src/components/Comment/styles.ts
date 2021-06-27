import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  background: #ffff;
  margin-top: 12px;
  padding-left: 22px;
  font-family: 'Roboto_700Bold';
  color: #202833;
  border-color: #e0e5eb;
  border-bottom-width: 1px;

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
  padding-bottom: 3px;
`;

export const Name = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #202833;
  font-size: 16px;
`;

export const IconsContainer = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 33px;
  padding-left: 68px;
  align-items:center;
  margin-bottom:12px;
`;

export const Caption = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #404b5a;
  font-size: 13px;
  margin-top: 5px;
  line-height: 21px;
`;

export const TimeToComment = styled.Text`
  font-family: 'Roboto_400Regular';
  color: #929fb1;
  font-size: 13px;
`;

