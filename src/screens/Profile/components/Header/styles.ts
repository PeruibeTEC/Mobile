import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 220px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  position: relative;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 100px;
  margin-top: 10px;
  border-width: 4px;
  border-color: #FFFFFF;

  position: absolute;
  bottom: -30%;
`;
